import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Toast from "./Toast";

export default function Post() {
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState();
  const [title, setTitle] = useState("");
  const [toast, setToast] = useState({ type: "info", massage: "" });
  useEffect(()=>{
    (()=>{
        try {
            
        } catch (error) {
            
        }
    })()
  },[postId])
  const handleChange=(e)=>{
    setPostId(e.target.value)
    setTitle('')
    loading(true)
  }
  return (
    <div>
      <input type="number" value={postId} onChange={handleChange} />
      {loading ? (
        <div
          className="d-flex align-items-center justify-content-center position-fixed "
          style={{ inset: 0 }}
        >
          <DNA />
        </div>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center position-fixed "
          style={{ inset: 0 }}
        >
            {title}
        </div>
      )}
      <Toast/>
    </div>
    
  );
}
