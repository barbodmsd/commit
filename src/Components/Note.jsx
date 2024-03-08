import React from "react";

export default function Note({ title, content }) {
  return (
    <div className="shadow-lg p-3 rounded-3 ">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
