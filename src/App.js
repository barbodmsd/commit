import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import LoginRegister from "./Pages/LoginRegister";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product-details" element={<ProductDetails/>}/>
        <Route path="/login-register" element={<LoginRegister/>}/>
      </Routes>

      <Footer />
    </>
  );
}
