import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Toast from "./Toast";

export default function Post() {
  const [postId, setPostId] = useState();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState();
  const [toast, setToast] = useState({ type: "info", message: "" });

  useEffect(()=>{
    (async()=>{
        try {
            const res=await fetch(``)
            const data=await res.json()
            if(data.title){
                setLoading(false)
                setTitle(data.title)
                setToast({type:'success',message:`post with id ${postId} loaded`})
            }else{
                throw new Error(`post with id ${postId} not founded`)
            }
        } catch (error) {
            setLoading(false)
            setToast({type:'error',message:error.message})
        }
    })()
  },[postId])
  const handleChange = (e) => {
    setPostId(e.target.value);
    setLoading(true);
    setTitle("");
  };
  return (
    <div>
      <input type="number" value={postId} onChange={handleChange} />
      {loading ? <DNA /> : title}
      <Toast type={toast.type} message={toast.message} />
    </div>
  );
}
