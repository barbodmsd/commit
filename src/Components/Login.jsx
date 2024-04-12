import React, { useContext, useEffect } from "react";
import AuthContext from "../utils/authContext";
import useForm from "../utils/useForm";

export default function Login() {
  const { setToken } = useContext(AuthContext);
  const [fields, handleChange] = useForm();
  const handleSubmit=(e)=>{
    e.preventDefault()
    useEffect(() => {
      (async () => {
        try {
          const res = await fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(fields),
          });
          const data = await res.json();
          setToken(data.token);
        } catch (error) {
          alert(error);
        }
      })();
    }, []);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Username
        </label>
        <input
          name="username"
          onChange={handleChange}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
