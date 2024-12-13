import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import s from "./style.module.css";

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
        "https://kebabalnoor.com/wp-content/uploads/2016/04/shawarma-falafel-600x600.jpg",
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
        "https://th.bing.com/th/id/OIP.z7ASO9s2WFmurcubEDaZggHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ];

  return (
    <>
      <div className="tocenter">
        <div className="page-container">
          <header className="header">
            <h1 style={{ color: "black" }}>Shawarma Hut</h1>
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

          <button className="back-button" onClick={() => navigate(-1)}>
            Back to Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default ShawarmaData;
