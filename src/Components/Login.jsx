import React from "react";
import useFormFields from "../Utils/useFormFields";

export default function Login() {
    const [fields,handleChange]=useFormFields()
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
