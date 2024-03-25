import React from 'react'

export default function Post() {
  return (
    <div>Post</div>
  )
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
