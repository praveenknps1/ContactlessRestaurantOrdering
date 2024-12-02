import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import s from "./style.module.css";

const ShawarmaData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  console.log(data);

  // Updated Menu Data with Shawarma Items
  const menuData = [
    {
      id: 1,
      name: "Chicken Shawarma",
      price: "$7",
      category: "Main Course",
      image: "https://th.bing.com/th/id/OIP.Ca9pWDuCKYqHi_SfMZlzZAHaFE?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 2,
      name: "Falafel Shawarma",
      price: "$6",
      category: "Vegetarian",
      image: "https://kebabalnoor.com/wp-content/uploads/2016/04/shawarma-falafel-600x600.jpg",
    },
    {
      id: 3,
      name: "Mixed Shawarma ",
      price: "$10",
      category: "Main Course",
      image: "https://th.bing.com/th/id/OIP.hOAYKYT77uGIwPgUg_ZZyQHaFf?w=252&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 4,
      name: "Shawarma Wrap",
      price: "$5",
      category: "Snacks",
      image: "https://th.bing.com/th/id/OIP.z7ASO9s2WFmurcubEDaZggHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
   <>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{color:"black"}}>Shawarma Hut</h1>
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

export default ShawarmaData;
