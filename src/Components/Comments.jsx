import React from "react";

export default function Comments({ comments }) {
  const commentItems = comments?.map((e, index) => (
    <div key={index} class="comment">
      <p>{e.body}</p>
    </div>
  ));
  return (
    <div class="comments">
      <p>Comments:</p>

     {commentItems}
    </div>
  );
}
