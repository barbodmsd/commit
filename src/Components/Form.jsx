import { useFormik } from "formik";
import React from "react";
import * as  Yup from "yup";
const initialValues={
  username:'',
  email:''
}
const onSubmit=values=>console.log(values)
const validationSchema=Yup.object({})
export default function Form() {
  const formik=useFormik({initialValues,onSubmit,validationSchema})

  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
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
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
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
//       <div className="mb-3">
//         <label htmlFor="exampleInputEmail1" className="form-label">
//           Email address
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           id="exampleInputEmail1"
//           aria-describedby="emailHelp"
//           {...formik.getFieldProps("email")}
//         />
//         {(formik.errors.email&&formik.touched.email)&&<div className="message">{formik.errors.email}</div>}
//         </div>
//       <div className="mb-3">
//         <label htmlFor="exampleInputPassword1" className="form-label">
//           username
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="exampleInputPassword1"
//           name="username"
//           {...formik.getFieldProps("username")}
//         />
//         {(formik.errors.username&&formik.touched.username)&&<div className="message">{formik.errors.username}</div>}
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// }
