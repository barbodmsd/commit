import { useFormik } from "formik";
import React from "react";

export default function YoutubeForm() {
   const formik= useFormik({})
   console.log(formik)
  return (
    <form class="form">
      <label>
        Username
        <input class="input" id="username" type="txt" name="username"/>
      </label>

      <label>
        E-mail
        <input class="input" id="email" type="password" name="email" />
      </label>

      <label>
        Channel
        <input class="input" id="channel" type="" name="channel" />
      </label>
      <button class="submit">Submit</button>
    </form>
  );
}
