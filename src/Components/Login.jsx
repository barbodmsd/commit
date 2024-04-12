import React, { useContext, useEffect } from "react";
import AuthContext from "../utils/authContext";

export default function Login() {
  const {setToken}=useContext(AuthContext)
  useEffect(()=>{
    (async()=>{
      try {
        const res=await fetch('')
        const data=await res.json()
        setToken(data.token)
      } catch (error) {
        alert(error)
      }
    })()
  },[])
  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Username
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
