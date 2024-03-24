import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Toast from "./Toast";

export default function Post() {
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState();
  const [title, setTitle] = useState("");
  const [toast, setToast] = useState({ type: "info", message: "" });
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const data = await res.json();
        if (data.title) {
          setTitle(data.title);
          setLoading(false);
          setToast({ type: "success", message: `post with id ${postId} loaded` });
        } else {
          throw new Error(`post with id ${postId} failed to load`);
        }
      } catch (error) {
        setLoading(false);
        setToast({
          type: "error",
          message: error.message,
        });
      }
    })();
  }, [postId]);
  const handleChange = (e) => {
    setPostId(e.target.value);
    setLoading(true);
    setTitle("");
  };
  return (
    <div>
      <input type="number" onChange={handleChange} value={postId} />
      {loading ? <DNA /> : <h5>{title}</h5>}
      <Toast type={toast.type} message={toast.message} />
    </div>
  );
}
