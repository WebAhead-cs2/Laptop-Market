import React from "react";
import  "./homestyle.css";
export default function Home() {
  const [list, setList] = React.useState([]);

  const Data = async () => {
    try {
      let res = await fetch("http://localhost:4000/AddingProducts");
      let resj = await res.json();
      console.log(resj);
      setList(resj);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("Test1", list);

  React.useEffect(() => {
    Data();
  }, []);
  console.log(list);
  return (
    <div >
      <h2>Laptop's</h2>
      {list.map((e) => (
       <div className="w3-container">
        <div key={e.id} className="w3-card-4">
          <h5>{e.name}</h5>
          <img src={e.img} style={{height:'150px',width:'150px'}} />
          <p>{e.price}$</p>
          <input type='button' value='Add'/>
          <input type='button' value='Read More'/>
           </div>
        </div>
      ))}
    </div>
  );
}
