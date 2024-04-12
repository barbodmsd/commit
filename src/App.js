import React, { useState } from "react";
import AuthContext from "./utils/authContext";
import Main from "./Components/Main";
import Login from "./Components/Login";

export default function App() {
  const [token,setToken]=useState()
  return (
    <>
      <AuthContext.Provider value={{token,setToken}}>
        {token?<Main/>:<Login/>}
      </AuthContext.Provider>
    </>
  );
}
