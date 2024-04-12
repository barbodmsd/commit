import React, { useContext, useEffect } from "react";
import AuthContext from "../utils/authContext";
import useForm from "../utils/useForm";

export default function Login() {
  const { setToken } = useContext(AuthContext);
  const [fields, handleChange] = useForm();
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
  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Username
        </label>
        <input
          name="username"
          onChange={handleChange}
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
          name="password"
          onChange={handleChange}
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
