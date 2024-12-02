import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import s from "./style.module.css";

const ShakesData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  console.log(data);

  // Updated Menu Data with Milkshakes
  const menuData = [
    { id: 1, name: "Chocolate Milkshake", price: "$5", category: "Beverage", image: "https://th.bing.com/th/id/OIP.55AIWvlQmrzcMr1CvbhLMwHaE8?w=208&h=139&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 2, name: "Strawberry Milkshake", price: "$4.5", category: "Beverage", image: "https://th.bing.com/th/id/OIP.p1NLOTtbMwjRSd4pGmpFUAHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 3, name: "Vanilla Milkshake", price: "$4", category: "Beverage", image: "https://th.bing.com/th/id/OIP.t0lY0hatnMcEvv_S6vlJJQHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 4, name: "Oreo Milkshake", price: "$6", category: "Beverage", image: "https://th.bing.com/th/id/OIP.gcMJee7lBu1amNLuAPDb0QHaJ1?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 5, name: "Banana Milkshake", price: "$4.5", category: "Beverage", image: "https://th.bing.com/th/id/OIP.Y_9obqkZnFQDCHZJm4T1YwHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  ];

  return (
    <>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{color:"black"}}>Milkshake Heaven</h1>
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
            <img src={item.image} alt={item.name} width={100} height="70px" />
            <button   className={s.addcart} 
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

export default ShakesData;
