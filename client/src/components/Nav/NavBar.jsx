import React from "react";
import AddingProducts from "../AddingProducts";
import LogIn from "../LogIn";
import Payment from "../Payment";
import SignUp from "../SignUp";
import Home from "../Items/Home";
import Orders from "../Orders";
import Cart from "../Cart";
import  "../Nav/style.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Profile from "../Profile";
export default function NavBar() {
  return (
    <div>
      <BrowserRouter>
        <nav className="nav">
            <NavLink to="/" style={{padding: '10px'}} >Home </NavLink>
            <NavLink to="/Payment" style={{padding: '10px'}}> Payment</NavLink>
            <NavLink to="/LogIn" style={{padding: '10px'}}>LogIn</NavLink>
            <NavLink to="/SignUp" style={{padding: '10px'}}>SignUp</NavLink>
            <NavLink to="/AddingProducts" style={{padding: '10px'}}>AddingProducts</NavLink>
            <NavLink to="/Profile" style={{padding: '10px'}}>Profile</NavLink>
            <NavLink to="/Orders" style={{padding: '10px'}}>Orders</NavLink>
            <NavLink to="/Cart" style={{padding: '10px'}}>Cart</NavLink>

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

        </Routes>
      </BrowserRouter>
    </div>
  );
}
