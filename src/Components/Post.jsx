import React, { useEffect, useState } from "react";
import useFormFields from "../Utils/useFormFields";

export default function Post() {
  const [fields,handleChange]=useFormFields()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const res=await fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(fields)
      })
      
    } catch (error) {
      
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="text"
          onChange={handleChange}
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
          type="password"
          onChange={handleChange}
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
