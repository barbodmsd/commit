import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'
const initialValues={
  username:'',
  email:''
}
const validationSchema= Yup.object({
  username:Yup.string().required('Username is required'),
  email:Yup.string().email('invalid format').required('email is required')
})
const onSubmit=values=>console.log(values)
export default function Form() {
  const formik=useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
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
          type="password"
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
