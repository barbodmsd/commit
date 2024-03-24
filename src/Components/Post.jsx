import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";

export default function Post() {
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState();
  const [title, setTitle] = useState();
  const [toast, setToast] = useState();
  useEffect(async()=>{
    try {
        const res=await fetch(``)
        const data=await res.json()
        setTitle
    } catch (error) {
        
    }
    const handleChange=(e)=>{
        setPostId(e.target.value)
        setLoading(true)
        setTitle('')
    }
  },[postId])
  return <div>
    <input type="number" onChange={handleChange} value={postId} />
    {loading?<DNA/>:<h5>{title}</h5>}
  </div>;
}
