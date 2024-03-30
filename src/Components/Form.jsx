import { useFormik } from "formik";
import React from "react";

const initialValues = {
  username: "",
  password: "",
};
const validaye = (values) => {
  let errors = {};
  !errors.username && (errors.username = "required");
  !errors.password && (errors.password = "required");

  return errors;
};
const onSubmit = (values) => console.log(values);
export default function Form() {
  const formik = useFormik({ initialValues, onSubmit, validate });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1 "
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
