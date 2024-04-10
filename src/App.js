import React from "react";
import AuthContext from "./Utils/authContext";
import Main from "./Components/Main";

export default function App() {
  return (
    <>
      <AuthContext.Provider value={5}>
        <Main/>
      </AuthContext.Provider>
    </>
  );
}
