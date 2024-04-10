import React, { useState } from "react";
import AuthContext from "./Utils/authContext";
import Main from "./Components/Main";
import Login from "./Components/Login";

export default function App() {
  const [token,setToken]=useState(null)
  const handleToken=(tk)=>{
    setToken(tk)
  }
  return (
    <>
      <AuthContext.Provider value={{token,handleToken}}>
        {token?<Main/>:<Login/>}
      </AuthContext.Provider>
    </>
  );
}
