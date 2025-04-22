import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import CementDetails from "./Pages/CementDetails";
import BricksDetails from "./Pages/BricksDetails";
import SandDetails from "./Pages/SandDetails";
import IronrodDetails from "./Pages/IronrodDetails";
import SteelDetails from "./Pages/SteelDetails";
import GravelDetails from "./Pages/GravelDetails";
import ForgotPassword from "./Pages/ForgotPassword";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from "./Pages/GoogleLogin";

import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import VedioGallery from './components/VedioGallery';
import LocationPage from './components/LocationPage';
import ContactPage from './components/ContactPage';
import Category from './components/Category';
import Products from './components/Products';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext'; // Import CartProvider

import CartPage from './Pages/CartPage';
import ProductDetail from "./components/ProductDetail";
import './index.css';

const root = document.getElementById("root");
const GoogleWrapper = () => (
  <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
    <GoogleLogin />
  </GoogleOAuthProvider>
);

ReactDOM.createRoot(root).render(
  <CartProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/GoogleLogin" element={<GoogleWrapper />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/CementDetails" element={<CementDetails />} />
      <Route path="/SandDetails" element={<SandDetails />} />
      <Route path="/SteelDetails" element={<SteelDetails />} />
      <Route path="/IronrodDetails" element={<IronrodDetails />} />
      <Route path="/BricksDetails" element={<BricksDetails />} />
      <Route path="/GravelDetails" element={<GravelDetails />} />
      
      {/* Extra routes using same Header/Navbar/Footer */}
      <Route path="/AboutUs" element={<><Header/><Navbar/><AboutUs/><Footer/></>} />
      <Route path="/Gallery" element={<><Header/><Navbar/><Gallery/><Footer/></>} />
      <Route path="/VedioGallery" element={<><Header/><Navbar/><VedioGallery/><Footer/></>} />
      <Route path="/LocationPage" element={<><Header/><Navbar/><LocationPage/><Footer/></>} />
      <Route path="/ContactPage" element={<><Header/><Navbar/><ContactPage/><Footer/></>} />
      <Route path="/Category" element={<><Header/><Navbar/><Category/><Footer/></>} />
      <Route path="/Products" element={<><Header/><Navbar/><Products/><Footer/></>} />

      <Route path="/product/:id" element={<ProductDetail product={{ id: 1, name: 'Product 1', description: 'This is a product', price: 100 }} />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/ProductDetail" element={<ProductDetail/>}/>
    </Routes>
  </BrowserRouter>
  </CartProvider>
);
