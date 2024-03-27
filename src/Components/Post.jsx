import React, { useEffect, useReducer } from "react";
import { DNA } from "react-loader-spinner";
import Toast from "./Toast";
const initialState = {
  postId: 1,
  loading: true,
  title: "",
  toast: { type: "info", message: "" },
};
const userAction = (state, action) => {
  switch (action.type) {
    case "get-post-request":
      return {
        ...state,
        postId: action.payload,
        title: "",
        loading: true,
      };
    case "get-post-success":
      return {
        ...state,
        title: action.payload.title,
        loading: false,
        toast: { type: "success", message: action.payload.message },
      };
    case "get-post-error":
      return {
        ...state,
        loading: false,
        toast: { type: "error", message: action.payload },
      };
  }
};
export default function Post() {
  const [{ postId, title, loading, toast }, dispatch] = useReducer(
    userAction,
    initialState
  );
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${postId}`);
        const date = await res.json();
        if (data.title) {
          dispatch({
            type: "get-post-success",
            payload: {
              title: data.title,
              message: `post with id ${postId} loaded`,
            },
          });
        }else{
            throw  new Error(`post with id ${postId} not founded`);
        }
      } catch (error) {
        dispatch({type:'get-post-error',payload: error.message});
      }
    })();
  }, [postId]);
  return (
    <div>
      <input type="number" value={postId} />
      {loading ? <DNA /> : title}
      <Toast type={toast.type} message={toast.message} />
    </div>
  );
}
