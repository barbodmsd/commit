import React, { useContext } from "react";
import AuthContext from "../Utils/authContext";

export default function User() {
  const { token } = useContext(AuthContext);

  return (
    <div>
      <h5>User token: {token}</h5>
    </div>
  );
}
