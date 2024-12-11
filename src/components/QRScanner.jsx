import React, { useState } from "react";
import QRScanner from "react-qr-scanner";
import Reader2Wrapper from "./QRScannerWrapper";

import { useNavigate } from "react-router-dom";

const QRScannerComponent = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleScan = (result) => {
    if (result) {
      setData(result.text);
      // Navigate to the menu page
      navigate("/menu");
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <h1 style={{ color: "black" }}>Scan For Food Restaurant's</h1>
      <Reader2Wrapper delay={300} onError={handleError} onScan={handleScan} />
      {data && <p>Scanned Data: {data}</p>}
    </div>
  );
};

export default QRScannerComponent;
