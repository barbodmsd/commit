import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Toast from "./Toast";

export default function Post() {
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [toast, setToast] = useState({ type: "info", message: "" });
  useEffect(()=>{
    (async()=>{
        try {
            const res=await fetch('')
        } catch (error) {
            
        }
    })()
  },[postId])
  const handleClick=(e)=>{
    setPostId(e.target.value)
    setLoading(true)
    setTitle('')
  }
  return (
    <div>
      <input type="number" placeholder="Enter number:"  handleClick={handleClick}/>
      {loading ? (
        <div
          className="d-flex justify-content-center  align-items-center position-fixed "
          style={{ inset: 0 }}
        >
          <DNA width={'100px'} height={'100px'} />
        </div>
      ) : (
        <div
          className="d-flex justify-content-center  align-items-center position-fixed "
          style={{ inset: 0}}
        >
          <h2>{title}</h2>
        </div>
      )}
      <Toast type={toast.type} message={toast.message}/>
    </div>
  );
}
