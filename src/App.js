import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LoginRegister from "./Pages/LoginRegister";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/login-register" element={<LoginRegister/>}/>
          <Route path="/products" element={<Products/>} />
          <Route path="/product-details" element={<ProductDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

      </main>
      <Footer />
    </>
  );
}
