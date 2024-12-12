// src/App.jsx
import './App.css'

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRScannerComponent from "./components/QRScanner";
import MenuPage from "./components/Menu";
import Cart from "./components/Cart";
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


function App() {
  return (
        <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<QRScannerComponent />} />
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
        <Route path="Qrcode" element={<QRcode/>}/>
      </Routes>
    </Router>
        </Provider>
  );
}

export default App;
