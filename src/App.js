import React, { useState } from "react";
import AuthContext from "./Utils/authContext";
import Main from "./Components/Main";

export default function App() {
  const [token,setToken]=useState(null)
  const handleToken=(tk)=>{
    setToken(tk)
  }
  return (
    <>
      <AuthContext.Provider value={{token,handleToken}}>
        <Main />
      </AuthContext.Provider>
    </>
  );
}
