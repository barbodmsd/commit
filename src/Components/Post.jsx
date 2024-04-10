import React, { useReducer } from 'react'
import { DNA } from 'react-loader-spinner'
import Toast from './Toast'

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
    const [{postId,title,loading,toast},dispatch]=useReducer(userAction,initialState)
  return (
    <div>
        <input type="number" onChange={handleChange} value={postId} />
        {loading?<DNA/>:title}
        <Toast type={toast.type} message={toast.message}/>
    </div>
  )
}
