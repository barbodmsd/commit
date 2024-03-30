import { useFormik } from "formik";
import React from "react";

const initialValues = {
  username: "d",
  password: "",
};
const validate = (values) => {
  let errors = {};
  if(!errors.username){
    errors.name='faasle'
  }
if(!errors.password){
  errors.password='to short'
}
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
          <div>{formik.errors.username&&<div className="message">{formik.errors.username}</div>}</div>
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
          {formik.errors.password&&<div className="message">{formik.errors.password}</div>}
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
