import React, { useState, useRef } from "react";
import QRScanner from "react-qr-scanner";
import Reader2Wrapper from "./QRScannerWrapper";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Qr.css";
import Spinner from "./loading"; // Import your spinner component

const QRScannerComponent = () => {
  const [data, setData] = useState(null);
  const [isBackCamera, setIsBackCamera] = useState(true); // State to toggle front/back camera
  const [showSpinner, setShowSpinner] = useState(false); // State to control spinner visibility
  const isProcessingScan = useRef(false); // Ref to handle debounce
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleScan = (result) => {
    if (result && !isProcessingScan.current) {
      isProcessingScan.current = true; // Block further scans temporarily
      setData(result.text);

      // Show spinner and success notification
      setShowSpinner(true);
      toast.success("Scanned successfully!", {
        position: "top-right",
        autoClose: 3000, // Closes after 3 seconds
      });

      // Navigate to the menu page
      setTimeout(() => {
        setShowSpinner(false); // Hide spinner
        navigate("/menu");
        isProcessingScan.current = false; // Reset the flag
      }, 3000); // Allow the toast to show before navigation
    }
  };

  const handleError = (error) => {
    console.error(error);
    toast.error("Failed to scan the QR code.", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const toggleCamera = () => {
    setIsBackCamera(!isBackCamera);
  };

  return (
    <div className={`container ${showSpinner ? "blur-background" : ""}`}>
      {/* <ToastContainer /> Add ToastContainer to render toasts */}
      {showSpinner && <Spinner />}
      {/* Left Section with Text and Images */}
      <div className="left-section">
        <h1>Welcome Foodie's to universal experience</h1>
        <p>
          Scan the QR code to explore our delicious menu and discover your next
          meal! We are excited to serve you!
        </p>
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.ihmdFUsOYb-UXsWgZMaeMAHaHa?rs=1&pid=ImgDetMain"
          alt="Delicious food"
          className="food-image"
        />
      </div>
      {/* Right Section with QR Scanner and Enhanced UI */}
      <div className="middle-section">
        <h1>Scan here 👇🏻</h1>
        <br />
        <Reader2Wrapper
          delay={300}
          onError={handleError}
          onScan={handleScan}
          className="qr-reader"
          constraints={{
            video: {
              facingMode: isBackCamera ? "environment" : "user",
            },
          }}
        />
        <br />
        <br />
        <button className="scan-button" onClick={() => navigate("/Qrcode")}>
          Click for QRcode
        </button>
        <br />
        <br />
        <button className="toggle-camera-button" onClick={toggleCamera}>
          Switch to {isBackCamera ? "Front" : "Back"} Camera
        </button>
      </div>
      <div className="right-section">
        <h1>We are ready to make delicious</h1>
        <img
          src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?w=1380&t=st=1708370581~exp=1708371181~hmac=91fb8612d27b3745ecbf9194f415b60970ed4f6266c71c333eb8ea5c2a5435be"
          alt="Delicious food"
          className="food-logo"
        />
      </div>
    </div>
  );
};

export default QRScannerComponent;
