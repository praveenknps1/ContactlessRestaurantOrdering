import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Qr.css';
import QRimg from "./QRcode.png"

function QRcode() {
  const data = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <>
      <div className="code">
        <div className="subcode">
          <h1>Use this QR code</h1>
          <p>Take a snap & use it!</p>
         <img src={QRimg} alt="QRcode" />
          <br />
          <button className="code-button" onClick={() => navigate(-1)}>
            Back to Scan 
          </button>
        </div>
      </div>
    </>
  );
}

export default QRcode;


