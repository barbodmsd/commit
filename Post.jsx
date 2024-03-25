import React from "react";
import { DNA } from "react-loader-spinner";
import Toast from "./Toast";
import { useEffect } from "react";
import { useReducer } from "react";
import { useMemo } from "react";
import { useCallback } from "react";


const initialState={
    postId:1,
    loading:true,
    title:'',
    toast:{ type: "info", message: "" }
}
const userAction = (state, action) => {
    switch (action.type) {
      case "get-post-request":
        return{
            ...state, 
            postId: action.payload,
            loading: true,
            title:''
        }
      case "get-post-success":
        return{
            ...state,
            loading:false,
            title:action.payload.title,
            toast:{ type: "success", message: action.payload.message }
        }
      case "get-post-failure":
        return{
            ...state,
            loading:false,
            toast:{ type: "error", message: action.payload }
        }
      default:
        alert("type wrong");
    }
  };



export default function Post() {
    // const x=useMemo(()=>{
    //     return 
    // },[])
    // const handleSubmit=useCallback(()=>{},[postId])
 const [{postId,title,loading,toast},dispatch]=useReducer(userAction,initialState);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const data = await res.json();
        if (data.title) {
          dispatch({type:"get-post-success",payload:{
            title: data.title,
            message: `Loaded post ${postId}`,
          }})
        } else {
          throw new Error(`post with id ${postId} not found`);
        }
      } catch (err) {
        dispatch({type:'get-post-failure',payload:err.message})
      }
    })();
  }, [postId]);
  const handleChange = (e) => {
    dispatch({type:"get-post-request",payload: e.target.value});
  };
  return (
    <div>
      <input type="number" value={postId} onChange={handleChange} />
      {loading ? <DNA /> : <p>{title}</p>}
      <Toast type={toast.type} message={toast.message} />
    </div>
  );
}


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
//         setTitle(payload.title);
//         setToast({ type: "success", message: payload.message });
//         break;
//       case "get-post-failure":
//         setLoading(false);
//         setToast({ type: "error", message: payload });
//         break;
//       default:
//         alert("type wrong");
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
//           userAction("get-post-success", {
//             title: data.title,
//             message: `Loaded post ${postId}`,
//           });
//         } else {
//           throw new Error(`post with id ${postId} not found`);
//         }
//       } catch (err) {
//         userAction('get-post-failure',err.message)
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

//   useEffect(()=>{
//     (async () => {
//         try{
//             const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//             const data=await res.json()
//             if(data.title){
//                 setLoading(false)
//                 setTitle(data.title)
//                 setToast({type:'success',message:`Loaded post ${postId}`})
//             }else{
//                 throw new Error(`post with id ${postId} not found`)
//             }
//         }catch(err){
//             console.log(err)
//             setLoading(false)
//             setToast({type:'error',message:err.message})
//         }
//     })()
//   },[postId])
//   const handleChange=(e)=>{
//     setPostId(e.target.value)
//     setLoading(true)
//     setTitle('')
//   }
//   return (
//     <div>
//       <input type="number" value={postId} onChange={handleChange} />
//       {loading ? <DNA /> : <p>{title}</p>}
//       <Toast type={toast.type} message={toast.message}/>
//     </div>
//   );
// }
