import React, { useEffect, useReducer } from 'react'
import { DNA } from 'react-loader-spinner'
import Toast from './Toast'

const initialState={
  postId:1,
  title:'',
  loading:true,
  toast:{type:'info',message:''}
}
const userAction=(state,action)=>{
  switch(action.type){
    case 'get-post-request':
      return{
        ...state,
        postId:action.payload,
        title:'',
        loading:true
      }
    case 'get-post-success':
      return{
        ...state,
        title:action.payload.title,
        loading:false,
        toast:{type:'success',message:action.payload.message}
      } 
    case 'get-post-error':
      return{
        ...state,
        loading:false,
        toast:{type:"error" ,message:action.payload}
      }  
  }
}
export default function Post() {
  const [{postId,title,loading,toast},dispatch]=useReducer(userAction,initialState)
  useEffect(()=>{
    (async()=>{
      try {
        const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const data=await res.json()
        if(data.title){
          dispatch({type:'get-post-success',payload:{
            title:data.title,
            message:`post with id ${postId } founded`
          }})
        }else{
          throw new Error(`post with id ${postId} not founded`)
        }
      } catch (error) {
        dispatch({type:'get-post-error',payload:error.message})
      }
    })()
  },[postId])
  const handleChange=(e)=>{
    dispatch({type:'get-post-request',payload:e.target.value})
  }
  return (
    <div>
      <input type="number" value={postId} onChange={handleChange} />
      {loading?<DNA/>:title}
      <Toast type={toast.type} message={toast.message}/>
    </div>
  )
}
















// import React, { useEffect, useReducer, useState } from "react";
// import { DNA } from "react-loader-spinner";
// import Toast from "./Toast";

// const initialState={
//   postId:1,
//   title:'',
//   loading:true,
//   toast:{type:'info',message:''}
// }
// const userAction = (state, action) => {
//   switch (action.type) {
//     case "get-post-request":
//       return {
//         ...state,
//         title:'',
//         loading:true,
//         postId: action.payload
//       }
//     case "get-post-success":
//       return{
//         ...state,
//         title:action.payload.title,
//         loading:false,
//         toast:{type:'success',message:action.payload.message}
//       }
//       case "get-post-error":
//       return{
//         ...state,
//         loading:false,
//         toast:{type:"error",message:action.payload}
//       }
//     default:
//       alert("type error");
//   }
// };
// export default function Post() {
// const [{postId,title,loading,toast},dispatch]=useReducer(userAction,initialState)
//   useEffect(()=>{
//    (async()=>{
//     try {
//       const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//       const data=await res.json()
//       if(data.title){
//         dispatch({type:'get-post-success',payload:{
//           title:data.title,
//           message:`loaded post ${postId}`
//         }})
//       }else{
//         throw new Error(`post with id ${postId} not founded`)
//       }
//     } catch (error) {
//       dispatch({type:'get-post-error',payload:error.message})
//     }
//    })()
//   },[postId])
//   const handleChange=(e)=>{
//     dispatch({type:'get-post-request',payload:e.target.value})
//   }
//   return (
//     <div>
//       <input type="number" value={postId} onChange={handleChange} />
//       {loading ? <DNA /> : title}
//       <Toast type={toast.type}  message={toast.message}/>
//     </div>
//   );
// }

// import React from "react";
// import { useState } from "react";
// import { DNA } from "react-loader-spinner";
// import Toast from "./Toast";
// import { useEffect } from "react";
// export default function Post() {
//   const [postId, setPostId] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [title, setTitle] = useState("");
//   const [toast, setToast] = useState({ type: "info", message: "" });

//   const userAction = (type, payload) => {
//     switch (type) {
//       case "get-post-request":
//         setPostId(payload);
//         setLoading(true);
//         setTitle("");
//         break;
//       case "get-post-success":
//         setLoading(false);
//         setTitle(payload);
//         setToast({ type: "success", message: `Loaded post ${postId}` });
//         break;
//       case "get-post-error":
//         setLoading(false);
//         setToast({ type: "error", message: payload });
//         break;
//       default:alert('type error')
//     }
//   };
//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await fetch(
//           `https://jsonplaceholder.typicode.com/posts/${postId}`
//         );
//         const data = await res.json();
//         if (data.title) {
//           userAction("get-post-success", data.title);
//         } else {
//           throw new Error(`post with id ${postId} not found`);
//         }
//       } catch (err) {
//         userAction("get-post-error", err.message);
//       }
//     })();
//   }, [postId]);
//   const handleChange = (e) => {
//     userAction("get-post-request", e.target.value);
//   };
//   return (
//     <div>
//       <input type="number" value={postId} onChange={handleChange} />
//       {loading ? <DNA /> : <p>{title}</p>}
//       <Toast type={toast.type} message={toast.message} />
//     </div>
//   );
// }
