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
            <p className="empty-cart">
              Your cart is empty. Please add some items.
            </p>
          ) : (
            <div className="cart-grid">
              {cartItems.map((item) => (
                <div className="cart-card" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <h3>{item.name}</h3>

                  <p className="price">₹{item.price}</p>

                  <button
                    className="remove-btn"
                    onClick={() => {
                      dispatch(remove_item(item.id));
                      toast.error("Item removed", {
                        autoClose: 1000,
                      });
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="cart-summary">
              <h2>Total Price : ₹{totalPrice.toFixed(2)}</h2>

              <button className="pay-button" onClick={handlePaymentSuccess}>
                Pay Now
              </button>
            </div>
          )}

          <div className="cart-actions">
            <button className="Recent-button" onClick={() => navigate(-1)}>
              To Recent Page
            </button>

            <button className="back-button" onClick={() => navigate("/menu")}>
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
