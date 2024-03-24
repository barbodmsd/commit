import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Toast from "./Toast";

export default function Post() {
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState();
  const [title, setTitle] = useState();
  const [toast, setToast] = useState({ type: "info", message: "" });
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const data = await res.json();
        if (data.title) {
          setLoading(false);
          setTitle(data.title);
          setToast({ type: "success", message: `Data Loaded width post id ${postId}` });
        }else{
            throw new Error(`data failed with post id ${postId}`)
        }
      } catch (error) {
        setLoading(false)
        setToast({type:'error',message:error.message})
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
      <input type="number" value={postId} onChange={handleChange}/>
      {loading ? (
        <div>
          <DNA />
        </div>
      ) : (
        <h5>{title}</h5>
      )}
      <Toast type={toast.type} message={toast.message}/>
    </div>
  );
}
