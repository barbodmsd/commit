import React from "react";

export default function Form() {
  return (
    <form>
      <label>
        Username
        <input type="text" name="username"/>
      </label>
      <label>
        E-mail
        <input type="text"  name="email"/>
      </label>
      <label>
        Channel
        <input type="text" name="channel" />
      </label>
    </form>
  );
}
