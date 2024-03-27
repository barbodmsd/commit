import React from 'react'
const initialState={
    postId:1,
    loading:true,
    title:'',
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
            return {
                ...state,
                title:action.payload.title,
                loading:false,
                toast:{type:'success',message:action.payload.message}
            }    
        case 'get-post-error':
            return{
                ...state,
                loading:false,
                toast:{type:'error',message:action.payload}
            }    
    }
}
export default function Post() {
  return (
    <div>Post</div>
  )
}
