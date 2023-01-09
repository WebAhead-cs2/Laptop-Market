import React from "react";
import AddingProducts from "../AddingProducts";
import LogIn from "../LogIn";
import Payment from "../Payment";
import SignUp from "../SignUp";
import Home from "../Items/Home";
import Orders from "../Orders";
import Cart from "../Cart";
import "../Nav/style.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Profile from "../Profile";
import ProductInfo from "../Items/ProductInfo";

export default function NavBar() {
  let userId = document.cookie.slice(7);
  const [userName, setUserName] = React.useState({});
  const [isloggedIn, setIsloggedIn] = React.useState(false);
  const userObj = async () => {
    try {
      if (!userId) {
        return;
      }

      const res = await fetch(`http://localhost:4000/users/${userId}`);
      const resj = await res.json();
      setUserName(resj);
      // window.localStorage.setItem("user", resj.username);
      setIsloggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };
  // let user = window.localStorage.getItem("user");
  React.useEffect(() => {
    userObj();
  }, []);
  const logout = async () => {
    // window.localStorage.removeItem("user"); // reset user key in local storage
    await fetch(`http://localhost:4000/logout`, {
      credentials: "include",
    });
    setIsloggedIn(false);
  };

  return (
    <div>
      <BrowserRouter>
        <nav className="nav">
          <NavLink to="/" style={{ padding: "10px" }}>
            Home{" "}
          </NavLink>

          {!isloggedIn && (
            <NavLink to="/LogIn" style={{ padding: "10px" }}>
              LogIn
            </NavLink>
          )}

          {isloggedIn && (
            <>
              <div className="loggedIn">
                <NavLink to="/Orders" style={{ padding: "10px" }}>
                  Orders
                </NavLink>
                <NavLink to="/Cart" style={{ padding: "10px" }}>
                  Cart
                </NavLink>
              </div>
              <div>
                <i>Welcome {userName.username}</i>
              </div>
              <NavLink to="/" style={{ display: "flex", marginLeft: "600px" }}>
                <i onClick={logout}>Log out</i>
              </NavLink>
            </>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/AddingProducts" element={<AddingProducts />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/AddingProducts/:id" element={<ProductInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
