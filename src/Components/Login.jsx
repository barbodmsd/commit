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
