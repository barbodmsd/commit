import React from "react";

export default function YoutubeForm() {
  return (
    <form class="form">
      <p class="title">Register </p>
      <p class="message">Sign up now and get full access to our app. </p>

      <label>
        <input class="input" type="email" placeholder="" required="" />
        <span>Email</span>
      </label>

      <label>
        <input class="input" type="password" placeholder="" required="" />
        <span>Password</span>
      </label>
      <label>
        <input class="input" type="password" placeholder="" required="" />
        <span>Confirm password</span>
      </label>
      <button class="submit">Submit</button>
      <p class="signin">
        Already have an account ? <a href="#">Sign in</a>{" "}
      </p>
    </form>
  );
}
