import { useFormik } from "formik";
import React from "react";

const initialValues = {
  username: "",
  password: "",
};
const onSubmit = (values) => console.log(values);
const validate = (values) => {};
export default function Form() {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
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
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
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
