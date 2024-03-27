import { useFormik } from "formik";
import React from "react";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit:values=>console.log(values)
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Username
        </label>
        <input
          type="username"
          className="form-control"
          id="exampleInputEmail1"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="form-control"
          id="exampleInputPassword1"
          name="password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
