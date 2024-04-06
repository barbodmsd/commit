import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
const initialValues = {
  username: "",
  email: "",
};
const onSubmit = (values) => console.log(values)
const validationSchema = Yup.object({
  username: Yup.string().required("username is required"),
  email: Yup.string().email("invalid format").required("Email is required"),
});
export default function Form() {
  const formik = useFormik({ initialValues, onSubmit, validationSchema });
  console.log(formik.touched)
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="message">{formik.errors.email}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="username"
          className="form-control"
          id="exampleInputPassword1"
          name="username"
          {...formik.getFieldProps("username")}
        />
        {formik.touched.username && formik.errors.username && (
          <div className="message">{formik.errors.username}</div>
        )}
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

// import { useFormik } from "formik";
// import React from "react";
// import * as Yup from "yup";
// const initialValues = {
//   username: "",
//   email: "",
// };
// const validationSchema = Yup.object({
//   username: Yup.string().required("Username is required"),
//   email: Yup.string().email("invalid format").required("email is required"),
// });
// const onSubmit = (values) => console.log(values);
// export default function Form() {
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validationSchema,
//   });
//   console.log(formik.touched)
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div classNameName="mb-3">
//         <label htmlhtmlFor="exampleInputEmail1" classNameName="form-label">
//           Email address
//         </label>
//         <input
//           type="email"
//           classNameName="form-control"
//           id="exampleInputEmail1"
//           aria-describedby="emailHelp"
//           {...formik.getFieldProps("email")}
//         />
//         {(formik.errors.email&&formik.touched.email)&&<div classNameName="message">{formik.errors.email}</div>}
//         </div>
//       <div classNameName="mb-3">
//         <label htmlhtmlFor="exampleInputPassword1" classNameName="form-label">
//           username
//         </label>
//         <input
//           type="text"
//           classNameName="form-control"
//           id="exampleInputPassword1"
//           name="username"
//           {...formik.getFieldProps("username")}
//         />
//         {(formik.errors.username&&formik.touched.username)&&<div classNameName="message">{formik.errors.username}</div>}
//       </div>
//       <button type="submit" classNameName="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// }
