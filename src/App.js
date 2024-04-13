import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./Pages/NotFound";
import LoginRegister from "./Pages/LoginRegister";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/products" element={<Products />} />
          <Route path="/product-details/:id/:name" element={<ProductDetails />} />
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
