import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import s from "./style.module.css";

const FryedData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  console.log(data);

  // Updated Menu Data with Fried Chicken Items
  const menuData = [
    {
      id: 1,
      name: "Classic Fried Chicken",
      price: "$6",
      category: "Main Course",
      image: "https://th.bing.com/th/id/OIP.kbbCbabTS6vizncZ6ZOoQgHaEJ?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 2,
      name: "Spicy Fried Chicken",
      price: "$7",
      category: "Main Course",
      image: "https://th.bing.com/th?q=Lemon+Chicken+Tenders&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 3,
      name: "Chicken Wings",
      price: "$8",
      category: "Starters",
      image: "https://th.bing.com/th/id/OIP.6YWtFjZKdrETQhSnt4khlQHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 4,
      name: " Chicken Sandwich",
      price: "$9",
      category: "Main Course",
      image: "https://th.bing.com/th?q=Fried+Chicken+Sandwich+Day&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
  ];

  return (
   <>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{color:"black"}}>Fried Chicken Menu</h1>
        
      </header>
      <div>
        {menuData.map((item, ind) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              borderRadius: "5px",
              gap:"30px",
              backgroundColor:"white",
              color:"black"
            }}
            >
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <img src={item.image} alt={item.name} width={100} height="70px"  />
            <button  className={s.addcart} 
              onClick={() => {
                dispatch(cart(item, ind));
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
<button style={{backgroundColor:"green"}}>My Cart: {data.cartArr.length}</button>
   </>
  );
};

export default FryedData;
