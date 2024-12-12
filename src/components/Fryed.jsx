import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cart } from "../toolkit/action";
import s from "./style.module.css";

const FryedData = () => {
  const { tableNumber } = useParams(); // Extract table number from URL
  let data = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(data);

  // Updated Menu Data with Fried Chicken Items
  const menuData = [
    {
      id: 22,
      name: "Classic Fried Chicken",
      price: "₹60",
      category: "Main Course",
      image:
        "https://th.bing.com/th/id/OIP.kbbCbabTS6vizncZ6ZOoQgHaEJ?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 24,
      name: "Spicy Fried Chicken",
      price: "₹70",
      category: "Main Course",
      image:
        "https://th.bing.com/th?q=Lemon+Chicken+Tenders&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 25,
      name: "Chicken Wings",
      price: "₹80",
      category: "Starters",
      image:
        "https://th.bing.com/th/id/OIP.6YWtFjZKdrETQhSnt4khlQHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 26,
      name: " Chicken Sandwich",
      price: "₹90",
      category: "Main Course",
      image:
        "https://th.bing.com/th?q=Fried+Chicken+Sandwich+Day&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
  ];

  return (
    <>
      <div className="tocenter">
        <div className="page-container">
          <header className="header">
            <h1 style={{ color: "black" }}>Fried Chicken Menu</h1>
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

export default FryedData;
