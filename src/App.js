import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import LoginRegister from "./Pages/LoginRegister";
import ProductDetails from "./Pages/productDetails";
import NotFoundPage from "./Pages/NotFoundPage";
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login-register" element={<LoginRegister/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products-details/:id" element={<ProductDetails/>}/>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
