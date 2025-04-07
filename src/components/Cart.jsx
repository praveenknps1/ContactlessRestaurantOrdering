import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove_item } from "../toolkit/action";
import "./main.css";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartArr);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    let num = Number(item.price.replace("₹", "")); // Convert ₹ price to number
    return total + num;
  }, 0);

  
  
  
    const handlePaymentSuccess = () => {
      // do any logic you want before navigation
    
      navigate("/success"); // <-- your route path
    };

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
              <div className="menu-item" key={item.id}>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <img src={item.image} alt="" />
                <button
                  style={{ backgroundColor: "#F95454" }}
                  onClick={() => {
                    dispatch(remove_item(item.id));
                    toast.error("Item removed", { autoClose: 1000 });
                  }}
                >
                  Remove
                </button>
              </div>
            ))
          )}

          {/* Display Total Price */}
          {cartItems.length > 0 && <h2>Total Price: ₹{totalPrice.toFixed(2)}</h2>}

          {/* Pay Now Button */}
          {cartItems.length > 0 && (
            <button className="pay-button" onClick={handlePaymentSuccess}>
              Pay Now
            </button>
          )}

          <button className="Recent-button" onClick={() => navigate(-1)}>
            To Recent Page
          </button>
          <button className="back-button" onClick={() => navigate("/menu")}>
            Back to Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;