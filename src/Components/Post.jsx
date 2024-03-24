import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

export default function Post() {
  const [postId, setPostId] = useState();
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
      } catch (error) {}
    })();
  }, [postId]);
  const handleChange = (e) => {
    setPostId(e.target.value);
    setLoading(true);
    setTitle("");
  };
  return (
    <div>
      <input type="number" onChange={handleChange}/>
      {loading ? (
        <div>
          <DNA />
        </div>
      ) : (
        <h5>{title}</h5>
      )}
    </div>
  );
}
