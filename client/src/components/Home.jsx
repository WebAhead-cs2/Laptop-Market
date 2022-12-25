import React from "react";

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
    <div>
      {list.map((e) => (
        <div key={e.id}>
          <h5>{e.name}</h5>
          <img src={e.img} style={{height:'150px',width:'150px'}} />
          <p>{e.price}$</p>
          <p>{e.model}</p>
          <p>{e.color}</p>
          <p>{e.brand}</p>
          <input type='button' value='Add'/>
          <input type='button' value='Read More'/>
           
        </div>
      ))}
    </div>
  );
}
