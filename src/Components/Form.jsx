import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
const initialValues = {
  username: "",
  email: "",
};
const onSubmit = (values) => console.log(values);

const validationSchema=Yup.object({
  username:Yup.string('s').required('username empty'),
  email:Yup.string().email( 'invalid email').required("email empty")
})
export default function Form() {
  const formik = useFormik({ initialValues, onSubmit, validationSchema });
  console.log(formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            name="username"
            // onChange={formik.handleChange}
            // value={formik.values.username}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps('username')}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div>
            {formik.touched.username && formik.errors.username && (
              <div className="message">{formik.errors.username}</div>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="email"
            // onChange={formik.handleChange}
            {...formik.getFieldProps('email')}
            // value={formik.values.email}
            // onBlur={formik.handleBlur}
            type="email"
            className="form-control"
            id="exampleInputPassword1"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="message">{formik.errors.email}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

// import { useFormik } from "formik";
// import React from "react";

// const initialValues = {
//   username: "",
//   password: "",
// };
// const validate = (values) => {
//   let errors = {};
//   if(!values.username){
//     errors.username='false'
//   }
// if(!values.password){
//   errors.password='to short'
// }
//   return errors;
// };
// const onSubmit = (values) => console.log(values);
// export default function Form() {
//   const formik = useFormik({ initialValues, onSubmit, validate });
//   return (
//     <div>
// <form onSubmit={formik.handleSubmit}>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">
//       Username
//     </label>
//     <input
//       name="username"
//       onChange={formik.handleChange}
//       value={formik.values.username}
//       type="text"
//       className="form-control"
//       id="exampleInputEmail1"
//       aria-describedby="emailHelp"
//     />
//     <div>{formik.errors.username&&<div className="message">{formik.errors.username}</div>}</div>
//     </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">
//       Password
//     </label>
//     <input
//       name="password"
//       onChange={formik.handleChange}
//       value={formik.values.password}
//       type="password"
//       className="form-control"
//       id="exampleInputPassword1"
//     />
//     {formik.errors.password&&<div className="message">{formik.errors.password}</div>}
//   </div>

//   <button type="submit" className="btn btn-primary">
//     Submit
//   </button>
// </form>
//     </div>
//   );
// }
