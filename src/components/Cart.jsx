import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove_item } from "../toolkit/action";
import "./main.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartArr); // Get cart items from Redux
  const dispatch = useDispatch(); // To dispatch actions
  const navigate = useNavigate(); // To navigate back to the menu
  console.log(cartItems);

  return (
    <>
      <div className="tocenter">
        <div className="page-container">
          <header className="header">
            <h1>My Cart</h1>
          </header>

          {cartItems.length === 0 ? (
            <p>Your cart is empty. Please add some items.</p>
          ) : (
            cartItems.map((item) => (
              <>
                <div className="menu-item" key={item.id}>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <img src={item.image} alt="" />

                  <button
                    style={{ backgroundColor: "#F95454" }}
                    onClick={() => dispatch(remove_item(item.id))} // Use item.id instead of index
                  >
                    Remove
                  </button>
                </div>
              </>
            ))
          )}
          <button className="back-button" onClick={() => navigate("/menu")}>
            Back to Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
