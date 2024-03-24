import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

export default function Post() {
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState();
  const [title, setTitle] = useState();
  const [toast, setToast] = useState();
  useEffect(async()=>{
    try {
        
    } catch (error) {
        
    }
  },[postId])
  return <div>
    <input type="number" value={postId} />
    {loading?<DNA/>:<h5>{title}</h5>}
  </div>;
}
