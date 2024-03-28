import React, { useState } from "react";

export default function Login() {
    const [fields,setFields]=useState()
    const handleChange=(e)=>{
        setFields({
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        console.log(fields)
        e.preventDefault()
    }
  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          username
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="username"
          onChange={handleChange}
        />
        
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
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
