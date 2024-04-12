import React, { useContext } from "react";
import useForm from '../utils/useForm'
import AuthContext from "../utils/authContext";
export default function Login() {
    const [fields,handleChange]=useForm()
    const {setToken}=useContext(AuthContext)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const res=await fetch('') 
            const data=await res.json()
            setToken(data.token)
        } catch (error) {
            alert(error)
        }

    }
  return (
    <form onSubmit={handleSubmit}>
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
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
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
