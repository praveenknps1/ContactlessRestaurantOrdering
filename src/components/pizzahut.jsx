import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import s from "./style.module.css";

const Pizzahut = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data=useSelector(state=>{
    return state
  })
  let dispatch=useDispatch()

  console.log(data);
  
  // Sample Menu Data
  const menuData = [
    { id: 1, name: "Pizza", price: "$10", category: "Main Course", image:"https://vendify-demos.astoundify.com/tasti/wp-content/uploads/sites/4/2020/12/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden-1536x1024.jpg" },
    { id: 2, name: "Pasta", price: "$12", category: "Main Course" , image:"https://th.bing.com/th/id/OIP.6VFRsrYFLmfEdUCRcM6GRwHaEo?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 3, name: "Salad", price: "$8", category: "Starters",  image:"https://images.alphacoders.com/104/thumb-1920-1043416.jpg"},
    { id: 4, name: "Margherita", price: "$9", category: "Starters",  image:"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg"},
  ];

  return ( 

    <>
   <div style={{ padding: "20px", fontFamily: "Arial, sans-serif",marginLeft:"30rem" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{color:"black"}}>PizzaHut menu</h1>
      </header>
      <div>
        {menuData.map((item,ind) => (
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
            <img src={item.image} alt="" width={100}  height="70px"/>
            <button className={s.addcart} onClick={()=>{
                dispatch(cart(item,ind))
              }}>
                Add to Cart
            </button>
          </div>
        ))}
      </div>
      <br />
        <button style={{backgroundColor:"green", }}  >Mycart:{data.cartArr.length}</button>

        

    </div>  
    </>
   
  );
};

export default Pizzahut;
