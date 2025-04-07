
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './successful.css';
const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/menu");
    }, 3000); // go home after 3 sec
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-container">
      <div className="success-box">
      <div className="circle">
        <div className="checkmark"></div>
      </div>
      <h2>Payment Successful!</h2>
      </div>
    </div>
  );
};

export default OrderSuccess;