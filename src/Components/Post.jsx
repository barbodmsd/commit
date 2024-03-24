import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Toast from "./Toast";
export default function Post() {
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState(true);
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
          setToast({
            type: "success",
            message: `Loaded post with id ${postId} success`,
          });
        } else {
          throw new Error(`post with id ${postId} not found`);
        }
      } catch (error) {
        setLoading(false);
        setToast({ type: "error", message: error.message });
      }
    })();
  }, [postId]);
  const handleClick = (e) => {
    setPostId(e.target.value);
    setLoading(true);
    setTitle("");
  };
  return (
    <div>
      <input type="number" value={postId} onChange={handleClick} />
      {loading ? (
        <div
          className="d-flex justify-content-center  align-items-center position-fixed "
          style={{ inset: 0 }}
        >
          <DNA width={"100px"} height={"100px"} />
        </div>
      ) : (
        <div
          className="d-flex justify-content-center  align-items-center position-fixed "
        >
          <h5>{title.slice(0,20)}</h5>
        </div>
      )}
      <Toast type={toast.type} message={toast.message} />
    </div>
  );
}
