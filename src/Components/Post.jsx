import React, { useState } from "react";
import { DNA } from "react-loader-spinner";

export default function Post() {
  const [postId, setPostId] = useState();
  const [loading, setLoading] = useState();
  const [title, setTitle] = useState();
  const [toast, setToast] = useState({ type: "info", message: "" });
  const handleChange=(e)=>{
    setPostId(e.target.value)
    se
  }
  return <div>
    <input type="number"  />
    {loading?<div><DNA/></div>:<h5>{title}</h5>}
  </div>;
}
