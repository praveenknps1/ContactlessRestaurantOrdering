import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import s from "./style.module.css";

const TiffinData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  console.log(data);

  // Updated Menu Data with Breakfast Items
  const menuData = [
    { id: 1, name: "Pancakes", price: "$5", category: "Breakfast", image: "https://tse4.mm.bing.net/th/id/OIP.EfQbFzgVZjK4pQOtUvbUkgHaEo?rs=1&pid=ImgDetMain" },
    { id: 2, name: "Waffles", price: "$6", category: "Breakfast", image: "https://tse3.mm.bing.net/th/id/OIP.yoIsqQBIRcqFxpZ1evtgkwHaE2?rs=1&pid=ImgDetMain" },
    { id: 3, name: "Scrambled Eggs", price: "$4", category: "Breakfast", image: "https://th.bing.com/th/id/OIP.cRLk49RmvHygZPMtzE5UYgHaEJ?rs=1&pid=ImgDetMain" },
    { id: 4, name: "French Toast", price: "$5", category: "Breakfast", image: "https://th.bing.com/th/id/OIP.nQ-RhI0AkJCEj8ZSFKJsswHaFj?w=285&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 5, name: "Oatmeal", price: "$3", category: "Breakfast", image: "https://th.bing.com/th/id/OIP.KA6iFg5s6YKPWyAJ-plFNQHaHa?w=204&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  ];

  return (
   <>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{color:"black"}}>Breakfast Menu</h1>
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

export default TiffinData;
