import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import s from "./style.module.css";
import { toast } from "react-toastify";

const ShakesData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(data);

  // Menu Data with Milkshakes
  const menuData = [
    {
      id: 27,
      name: "Chocolate Milkshake",
      price: "₹50",
      category: "Beverage",
      image:
        "https://th.bing.com/th/id/OIP.55AIWvlQmrzcMr1CvbhLMwHaE8?w=208&h=139&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 28,
      name: "Strawberry Milkshake",
      price: "₹45",
      category: "Beverage",
      image:
        "https://th.bing.com/th/id/OIP.p1NLOTtbMwjRSd4pGmpFUAHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 30,
      name: "Oreo Milkshake",
      price: "₹60",
      category: "Beverage",
      image:
        "https://th.bing.com/th/id/OIP.gcMJee7lBu1amNLuAPDb0QHaJ1?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 31,
      name: "Banana Milkshake",
      price: "₹45",
      category: "Beverage",
      image:
        "https://th.bing.com/th/id/OIP.Y_9obqkZnFQDCHZJm4T1YwHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
    <>
      <div className="tocenter">
        <div className="page-container">
          <header className="header">
            <h1 style={{ color: "black" }}>Milkshake Heaven</h1>
          </header>
          <div>
            {menuData.map((item, ind) => (
              <div className="menu-item" key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <img src={item.image} alt="" />
                <button
                 onClick={() => {dispatch(cart(item, ind)), toast.success("item add successful", {autoClose: 1000,})} }
                  className="cart_"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <br />
          <button className="cart-button" onClick={() => navigate("/cart")}>
            My Cart: {data.cartArr.length}
          </button>

          <button className="back-button" onClick={() => navigate(-1)}>
            Back to Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default ShakesData;
