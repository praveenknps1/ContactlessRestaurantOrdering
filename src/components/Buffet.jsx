import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import s from "./style.module.css";

const BuffetData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  console.log(data);

  // Updated Menu Data with Buffet Items
  const menuData = [
    {
      id: 1,
      name: "Caesar Salad",
      price: "$10",
      category: "Starters",
      image: "https://tse2.mm.bing.net/th/id/OIP.oD6vrx4uwfcddKLSeV3TkgHaFj?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 2,
      name: "Garlic Bread",
      price: "$5",
      category: "Sides",
      image: "https://www.colbeck.co.uk/wp-content/uploads/2017/11/garlic_bread_shrink.jpg",
    },
    {
      id: 3,
      name: "Penne Alfredo",
      price: "$12",
      category: "Main Course",
      image: "https://th.bing.com/th/id/OIP.sIh4yOd7gCkKVgQ2Ng1umwHaHa?rs=1&pid=ImgDetMain",
    },
    {
      id: 4,
      name: "Fruit Tart",
      price: "$7",
      category: "Dessert",
      image: "https://tse3.mm.bing.net/th/id/OIP.hzV4Su91MACQ7G4S-VVx0QHaEo?rs=1&pid=ImgDetMain",
    },
  ];

  return (
  <>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{color:"black"}}>Buffet Menu</h1>
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
<button style={{backgroundColor:"green"}}>My Cart: {data.cartArr.length}</button>
  </>
  );
};

export default BuffetData;
