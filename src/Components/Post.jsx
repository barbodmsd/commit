import React from 'react'

const initialState={
    postId:1,
    loading,
    title,
    toast:{type:'info',message:''}
}
const userAction=(state,action)=>{
    switch(action.type){
        case 'get-post-request':
            return{
                ...state,
                loading:true,
                title:'',
                postId:action.payload
            }
        case 'get-post-success':
            return{
                ...state,
                title:action.payload.title,
                toast:{type:'success',message:action.payload.message},
                loading:false
            }    
        case 'get-post-error':
            return{
                ...state,
                loading:false,
                toast:{type:'error',message:action.payload}
            }   
        default:
            alert('type error')    
    }
}
export default function Post() {
  return (
    <div>Post</div>
  )
}
