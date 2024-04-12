import React from "react";
import AuthContext from "./utils/authContext";
import Main from "./Components/Main";

export default function App() {
  return (
    <>
      <AuthContext.Provider value={85}>
        <Main />
      </AuthContext.Provider>
    </>
  );
}
