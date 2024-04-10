import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Toast from "./Toast";

export default function Post() {
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState();
  const [title, setTitle] = useState();
  const [toast, setToast] = useState({ type: "info", message: "" });

  const userAction = (type, payload) => {
    switch (type) {
      case "get-post-request":
        setLoading(true);
        setTitle("");
        setPostId(payload);
        break;
      case "get-post-success":
        setLoading(false);
        setToast({ type: "success", message: payload.message });
        setTitle(payload.title);
        break;
      case "get-post-error":
        setLoading(false);
        setToast({
          type: "error",
          message: `post with id ${postId} not founded`,
        });
        break;
      default:
        alert("type error");
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const data = await res.json();
        if (data.title) {
          userAction("get-post-success", {
            title: data.title,
            message: `post with id ${postId} loaded`,
          });
        } else {
          throw new Error(`post with id ${postId} not founded `);
        }
      } catch (error) {
        userAction("get-post-error", error.message);
      }
    })();
  }, [postId]);
  const handleChange = (e) => {
    userAction("get-post-request", e.target.value);
  };
  return (
    <div>
      <input type="number" onChange={handleChange} />
      {loading ? <DNA /> : title}
      <Toast type={toast.type} message={toast.message} />
    </div>
  );
}
