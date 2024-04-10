import React, { useEffect, useReducer } from 'react'
import { DNA } from 'react-loader-spinner'
import Toast from './Toast'

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
    useEffect(()=>{
        (async()=>{
            try {
                const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                const data=await res.json()
                if(data.title){
                    dispatch({type:'get-post-success',payload:{title:data.title,message:`post with id ${postId} founded`}})
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
        <input type="number" onChange={handleChange} value={postId} />
        {loading?<DNA/>:title}
        <Toast type={toast.type} message={toast.message}/>
    </div>
  )
}
