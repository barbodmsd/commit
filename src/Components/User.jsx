import React, { useContext } from "react";
import AuthContext from "../Utils/authContext";

export default function User() {
  const { token,handleToken } = useContext(AuthContext);
const handleClick=()=>{
    handleToken(null)
}
  return (
    <div>
      <h5>User token: {token}</h5>
      <button className="btn btn-primary " onClick={handleClick}> click to logout</button>
    </div>
  );
}
