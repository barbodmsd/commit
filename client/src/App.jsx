import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Auth from "./Pages/Auth";
import BlogDetails from "./Pages/BlogDetails";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import User from "./Pages/User";

export default function App() {
  const { token } = useSelector((state) => state.authSlice);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/blog-details/:id' element={<BlogDetails />} />
        <Route path='/user/:id' element={<User />} />
        <Route
          path='/auth'
          element={token ? <Navigate to={"/"} /> : <Auth />}
        />
        <Route path='/admin-dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}
