import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItem = location.state?.cartItem || null;

  const handlePayment = () => {
    navigate("/confirmation", { state: { cartItem } });
  };

  return (
    <div>
      <h2>Payment</h2>
      {cartItem ? (
        <div>
          <p>
            Paying for: {cartItem.name} - ${cartItem.price}
          </p>
          <button onClick={handlePayment}>Complete Payment</button>
        </div>
      ) : (
        <p>No items to pay for</p>
      )}
    </div>
  );
};

export default Payment;
