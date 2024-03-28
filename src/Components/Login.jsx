import React, { useState } from "react";
import useLoginForm from "../Utils/useLoginForm";

export default function Login() {
 const [fields,handleChange]=useLoginForm()
 const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(fields)
 }
    
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          username
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="username"
          onChange={handleChange}
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
