import React, { useContext } from "react";
import AuthContext from "../Utils/authContext";

export default function User() {
  const { token,handleToken } = useContext(AuthContext);
  return (
    <div>
      <h5>User token: {token}</h5>
      <button className="btn btn-primary " onClick={()=>handleToken(null)}> click to logout</button>
    </div>
  );
}
