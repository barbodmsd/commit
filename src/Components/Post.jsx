import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Toast from "./Toast";

export default function Post() {
  const [postId, setPostId] = useState(1);
  const [loading, setLoading] = useState();
  const [title, setTitle] = useState("");
  const [toast, setToast] = useState({ type: "info", massage: "" });
  useEffect(()=>{
    (async()=>{
        try {
            const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            const data= await res.json()
            if(data.title){
                setLoading(false)
                setTitle(data.title)
                setToast({type:"success",message:`post with id ${postId} loaded`})
            }else{
                throw new Error(`post with id ${postId} not found`)
            }
        } catch (error) {
            setLoading(false)
            setToast({type:'error',message:error.message})
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
