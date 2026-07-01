import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import s from "./style.module.css";
import { toast } from "react-toastify";

const ShawarmaData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(data);

  // Menu Data with Shawarma Items
  const menuData = [
    {
      id: 32,
      name: "Chicken Shawarma",
      price: "₹70",
      category: "Main Course",
      image:
        "https://th.bing.com/th/id/OIP.Ca9pWDuCKYqHi_SfMZlzZAHaFE?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 33,
      name: "Falafel Shawarma",
      price: "₹60",
      category: "Vegetarian",
      image:
        "https://th.bing.com/th/id/OIP.VTAbb1n_kYlK6_yGceukOQHaEo?w=285&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
    {
      id: 34,
      name: "Mixed Shawarma ",
      price: "₹100",
      category: "Main Course",
      image:
        "https://th.bing.com/th/id/OIP.hOAYKYT77uGIwPgUg_ZZyQHaFf?w=252&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 35,
      name: "Shawarma Wrap",
      price: "₹50",
      category: "Snacks",
      image:
        "https://th.bing.com/th/id/OIP.gw22Q3RpRfEgb8LeOHbPogHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    },
  ];

  return (
    <>
      <div className="tocenter">
        <div className="page-container">
          <header className="header">
            <h1 style={{ color: "black" }}>Shawarma Hut</h1>
          </header>
          <div className="menu-grid">
            {menuData.map((item, ind) => (
              <div className="menu-item" key={item.id}>
                <h3>{item.name}</h3>

                <p>{item.price}</p>
                <img src={item.image} alt="" />
                <button
                  onClick={() => {
                    (dispatch(cart(item, ind)),
                      toast.success("item add successful", {
                        autoClose: 1000,
                      }));
                  }}
                  className="cart_"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <br /> <br /> <br />
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

export default ShawarmaData;
