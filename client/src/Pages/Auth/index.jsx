import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  const [pageType, setPageType] = useState("register");
  const handlePageType = () => {
    setPageType(pageType === "login" ? "register" : "login");
  };
  return (
    <>
      {pageType === "login" ? (
        <Login handlePageType={handlePageType} />
      ) : (
        <Register handlePageType={handlePageType} />
      )}
    </>
  );
}
