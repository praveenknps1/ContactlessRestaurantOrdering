

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRScannerComponent from "./components/QRScanner";
import MenuPage from "./components/Menu";
import Cart from "./components/cart";
import { store } from "./toolkit/store";
import { Provider } from "react-redux";
import Pizzahut from "./components/pizzahut";
import CafeData from "./components/coffee";
import BiryaniData from './components/Biryani';
import BuffetData from './components/Buffet';
import TiffinData from './components/Tiffin';
import FryedData from './components/Fryed';
import ShakesData from './components/Shakes';
import ShawarmaData from './components/Shawarma';
import QRcode from './components/QrCode';
import { ToastContainer } from 'react-toastify';
import OrderSuccess from './components/paymentsuccessful';
import NotFound from './components/NotFound';
import Layout from './layout/Layout';


function App() {
  return (

        <Provider store={store}>
  <ToastContainer className="max-sm:[&.Toastify__toast-container--bottom-right]:bottom-24!" />
    <Router>
      <Routes>
        {/* Home (scanner) + QR code page: full-screen, no navbar/footer */}
        <Route path="/" element={<QRScannerComponent />} />
        <Route path="Qrcode" element={<QRcode/>}/>

        {/* Every other page shares the navbar + footer */}
        <Route element={<Layout />}>
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizzahut" element={<Pizzahut/>}/>
          <Route path="/cafe" element={<CafeData/>}/>
          <Route path="biryani" element={<BiryaniData/>}/>
          <Route path="buffet" element={<BuffetData/>}/>
          <Route path="tiffin" element={<TiffinData/>}/>
          <Route path="fryed" element={<FryedData/>}/>
          <Route path="shakes" element={<ShakesData/>}/>
          <Route path="shawarma" element={<ShawarmaData/>}/>
          <Route path="/success" element={<OrderSuccess/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
        </Provider>
  );
}

export default App;
