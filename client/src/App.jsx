import React, { useState } from "react";
import AuthContext from "./Utils/authContext";
import Navbar from "./Components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import BlogDetails from "./Pages/BlogDetails";
import User from "./Pages/User";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";

export default function App() {
  const [user, setUser] = useState({
    username: null,
    role: null,
    image: null,
    token: null,
  });
  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/blog-details/:id' element={<BlogDetails />} />
          <Route path='/user/:id' element={<User />} />
          <Route
            path='/auth'
            element={user.token ? <Navigate to={"/"} /> : <Auth />}
          />
          <Route path='/admin-dashboard' element={<Dashboard />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}
