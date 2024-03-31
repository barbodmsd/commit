import { useFormik } from "formik";
import React from "react";
const initialValues = {
  username: "",
  password: "",
};
const onSubmit = (values) => console.log(formik.values);
const validate=values=>{
  let errors={}


  return errors
}
export default function Form() {
  const formik = useFormik({ initialValues, onSubmit, validate });
  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Username
        </label>
        <input
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
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">
//             Username
//           </label>
//           <input
//             name="username"
//             onChange={formik.handleChange}
//             value={formik.values.username}
//             type="text"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//           />
//           <div>{formik.errors.username&&<div className="message">{formik.errors.username}</div>}</div>
//           </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             name="password"
//             onChange={formik.handleChange}
//             value={formik.values.password}
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//           />
//           {formik.errors.password&&<div className="message">{formik.errors.password}</div>}
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
