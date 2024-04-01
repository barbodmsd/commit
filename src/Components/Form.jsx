import React from 'react'

const initialValues={
  username:'',
  password:''
}
export default function Form() {
  return (
    <div>Form</div>
  )
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
//       <form onSubmit={formik.handleSubmit}>
//         <div classNameName="mb-3">
//           <label htmlhtmlFor="exampleInputEmail1" classNameName="form-label">
//             Username
//           </label>
//           <input
//             name="username"
//             onChange={formik.handleChange}
//             value={formik.values.username}
//             type="text"
//             classNameName="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//           />
//           <div>{formik.errors.username&&<div classNameName="message">{formik.errors.username}</div>}</div>
//           </div>
//         <div classNameName="mb-3">
//           <label htmlhtmlFor="exampleInputPassword1" classNameName="form-label">
//             Password
//           </label>
//           <input
//             name="password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//             type="password"
//             classNameName="form-control"
//             id="exampleInputPassword1"
//           />
//           {formik.errors.password&&<div classNameName="message">{formik.errors.password}</div>}
//         </div>

//         <button type="submit" classNameName="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
