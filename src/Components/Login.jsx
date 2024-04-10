import React, { useContext } from "react";
import useFormFields from "../Utils/useFormFields";
import AuthContext from "../Utils/authContext";

export default function Login() {
    const [fields,handleChange]=useFormFields()
    const {handleToken}=useContext(AuthContext)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const res=await fetch('https://fakestoreapi.com/auth/login',{
                method:"POST",
                headers:{'content-type': 'application/json'},
                body:JSON.stringify(fields)
            })
            const data=res.json()
            alert('login successfully')
            handleToken(data.token)
        } catch (error) {
            alert('incorrect  username or password')
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
