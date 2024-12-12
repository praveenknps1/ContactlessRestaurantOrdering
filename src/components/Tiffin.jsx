import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import s from "./style.module.css";

const TiffinData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(data);

  //  Menu Data with Breakfast Items
  const menuData = [
    {
      id: 17,
      name: "Pancakes",
      price: "₹50",
      category: "Breakfast",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.EfQbFzgVZjK4pQOtUvbUkgHaEo?rs=1&pid=ImgDetMain",
    },
    {
      id: 18,
      name: "Waffles",
      price: "₹60",
      category: "Breakfast",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.yoIsqQBIRcqFxpZ1evtgkwHaE2?rs=1&pid=ImgDetMain",
    },
    {
      id: 19,
      name: "Scrambled Eggs",
      price: "₹40",
      category: "Breakfast",
      image:
        "https://th.bing.com/th/id/OIP.cRLk49RmvHygZPMtzE5UYgHaEJ?rs=1&pid=ImgDetMain",
    },
    {
      id: 20,
      name: "French Toast",
      price: "₹50",
      category: "Breakfast",
      image:
        "https://th.bing.com/th/id/OIP.nQ-RhI0AkJCEj8ZSFKJsswHaFj?w=285&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 21,
      name: "Oatmeal",
      price: "₹30",
      category: "Breakfast",
      image:
        "https://th.bing.com/th/id/OIP.KA6iFg5s6YKPWyAJ-plFNQHaHa?w=204&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
    <>
      <div className="tocenter">
        <div className="page-container">
          <header className="header">
            <h1 style={{ color: "black" }}>Breakfast Menu</h1>
          </header>

          <div>
            {menuData.map((item, ind) => (
              <div className="menu-item" key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <img src={item.image} alt="" />
                <button
                  onClick={() => dispatch(cart(item, ind))}
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

          <button className="back-button" onClick={() => navigate("/menu")}>
            Back to Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default TiffinData;
