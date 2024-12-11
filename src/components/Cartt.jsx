// src/components/Cart.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeItem, clearCart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  // const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}{" "}
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${totalAmount}</p>
          <button onClick={handleCheckout}>Checkout</button>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
