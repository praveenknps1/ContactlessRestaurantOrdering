


import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Qr.css';

function QRcode() {
  const data = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <>
      <div className="code">
        <div className="subcode">
          <h1>Use this QR code</h1>
          <p>Take a snap & use it!</p>
          <img 
            src="https://th.bing.com/th/id/R.6fe3ac1c7035a5f58f317a5770d3b262?rik=xqPSzhAUEDgang&riu=http%3a%2f%2furbanfamily.thatsmags.com%2fuploads%2fimage%2f201710%2ftotw-qr-code-869cd2.png&ehk=stXKUfmevyjwS2vPdkRicTsgPDO%2fA6p7SwKNDWeTvUE%3d&risl=&pid=ImgRaw&r=0" 
            alt="QR Code" 
          />
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


