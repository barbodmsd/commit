import React, { useState } from 'react'
import { DNA } from 'react-loader-spinner'
import Toast from './Toast'

export default function Post() {
    const [postId,setPostId]=useState()
    const [title,setTitle]=useState('')
    const [loading,setLoading]=useState()
    const [toast,setToast]=useState({type:'info',message:''})

    const handleChange=(e)=>{
        setPostId(e.target.value)
        setLoading(true)
        setTitle('')
    }
  return (
    <div>
        <input type="number" value={postId} onChange={handleChange}/>
        {loading?<DNA/>:title}
        <Toast type={toast.type} message={toast.message}/>
    </div>
  )
}
