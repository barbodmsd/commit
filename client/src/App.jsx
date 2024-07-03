import React, { useState } from "react";
import AuthContext from "./Utils/authContext";

export default function App() {
  const [data, setData] = useState({
    user: {
      username: null,
      role: null,
      image: null,
    },
    token: null,
  });
  return (
    <>
      <AuthContext.Provider value={{ data, setData }}>
        
      </AuthContext.Provider>
    </>
  );
}
