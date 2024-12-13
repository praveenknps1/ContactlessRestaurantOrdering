// import React, { useState } from "react";
// import QRScanner from "react-qr-scanner";
// import Reader2Wrapper from "./QRScannerWrapper";
// import { useNavigate } from "react-router-dom";
// import './Qr.css'; // external stylesheet

// const QRScannerComponent = () => {
//   const [data, setData] = useState(null);
//   const navigate = useNavigate(); // Get the navigate function from React Router

//   const handleScan = (result) => {
//     if (result) {
//       setData(result.text);
//       // Navigate to the menu page
//       navigate("/menu");
//     }
//   };

//   const handleError = (error) => {
//     console.error(error);
//   };

//   return (
//     <div className="container">
//       {/* Left Section with Text and Images */}
//       <div className="left-section">
//         <h1>Welcome Foodie's to universal experience</h1>
//         <p>
//           Scan the QR code to explore our delicious menu and discover your next meal! We are excited to serve you!
//         </p>
//         <img 
//           src="https://tse3.mm.bing.net/th/id/OIP.ihmdFUsOYb-UXsWgZMaeMAHaHa?rs=1&pid=ImgDetMain" 
//           alt="Delicious food" 
//           className="food-image" 
//         />
//       </div>
      
//       {/* Right Section with QR Scanner and Enhanced UI */}
//       <div className="middle-section">
//         <h1>Scan here 👇🏻</h1>
//         <br />
//         <Reader2Wrapper 
//           delay={300} 
//           onError={handleError} 
//           onScan={handleScan} 
//           className="qr-reader"
//         />
//         {data && (
//           <p className="scanned-data">Scanned Data: {data}</p>
//         )}
//         <br />
//         <br />
//          <button className="scan-button" onClick={() => navigate("/Qrcode")}>
//             Click for QRcode
//           </button>
//       </div>
      
//       <div className="right-section">
//         <h1>We are ready to make delicious</h1>
//         <img 
//           src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?w=1380&t=st=1708370581~exp=1708371181~hmac=91fb8612d27b3745ecbf9194f415b60970ed4f6266c71c333eb8ea5c2a5435be" 
//           alt="Delicious food" 
//           className="food-logo" 
//         />
//       </div>
//     </div>
//   );
// };

// export default QRScannerComponent;

import React, { useState } from "react";
import QRScanner from "react-qr-scanner";
import Reader2Wrapper from "./QRScannerWrapper";
import { useNavigate } from "react-router-dom";
import './Qr.css'; // external stylesheet

const QRScannerComponent = () => {
  const [data, setData] = useState(null);
  const [cameraFacingMode, setCameraFacingMode] = useState("environment"); // Default to back camera
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

  const toggleCamera = () => {
    // Toggle between 'environment' (back) and 'user' (front) camera
    setCameraFacingMode((prevMode) => (prevMode === "environment" ? "user" : "environment"));
  };

  return (
    <div className="container">
      {/* Left Section with Text and Images */}
      <div className="left-section">
        <h1>Welcome Foodie's to universal experience</h1>
        <p>
          Scan the QR code to explore our delicious menu and discover your next meal! We are excited to serve you!
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
          facingMode={cameraFacingMode} // Set the camera facing mode
          className="qr-reader"
        />
        {data && (
          <p className="scanned-data">Scanned Data: {data}</p>
        )}
        <br />
        <button className="toggle-camera-button" onClick={toggleCamera}>
          Switch to {cameraFacingMode === "environment" ? "Front" : "Back"} Camera
        </button>
        <br />
        <br />
         <button className="scan-button" onClick={() => navigate("/Qrcode")}>Click for QRcode</button>
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

