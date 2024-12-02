import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import s from "./style.module.css";

const BiryaniData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  console.log(data);

  // Updated Menu Data with Biryani Items
  const menuData = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: "$12",
      category: "Main Course",
      image: "https://th.bing.com/th/id/OIP.r6T2zRnyrrP8LdtOEaGVowHaGl?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "Veg Biryani",
      price: "$10",
      category: "Main Course",
      image: "https://th.bing.com/th/id/OIP.09w0S6udb6sRvC1qeh3gdQHaE0?w=295&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 3,
      name: "Mutton Biryani",
      price: "$15",
      category: "Main Course",
      image: "https://th.bing.com/th/id/OIP.uTBYGUmws-MDoYlX-BstNgHaF7?w=211&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 4,
      name: "Hyderabadi Biryani",
      price: "$14",
      category: "Main Course",
      image: "https://tse4.mm.bing.net/th/id/OIP.tnzLyQlYfwGVmq_3AU-cGQHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
   <>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{color:"black"}}>Biryani House</h1>
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
<button  style={{backgroundColor:"green"}}>My Cart: {data.cartArr.length}</button>
   </>
  );
};

export default BiryaniData;
