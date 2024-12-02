import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import s from "./style.module.css";

const CafeData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  console.log(data);

  // Updated Menu Data with Cafe Items
  const menuData = [
    { id: 1, name: "Espresso", price: " $3", category: "Beverage", image: "https://th.bing.com/th/id/OIP.gzBuoJWcQj9EuHkrrimCigHaEo?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 4, name: "Sandwich", price: "$5", category: "Food", image: "https://tse2.mm.bing.net/th/id/OIP.ohrluOUVy__pXVpyJKAIfAHaEy?w=304&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    { id: 5, name: "Muffin", price: "$2", category: "Pastry", image: "https://tse4.mm.bing.net/th/id/OIP.pagLLG608RxTB-L5sXVNBQHaE8?rs=1&pid=ImgDetMain" },
    { id: 6, name: "Latte", price: "$3.5", category: "Beverage", image: "https://tse3.mm.bing.net/th/id/OIP.6Lb2xzBM3B6maFHPDwhw5AHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  ];

  return (
  <>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{color:"black"}}> Coffee Cafe Menu</h1>
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
            <img src={item.image} alt={item.name} width={100}  height="70px" />
            <button  className={s.addcart}  onClick={() => {
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

export default CafeData;
