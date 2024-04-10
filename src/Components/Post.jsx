import React, { useState } from 'react'

export default function Post() {
    const [postId,setPostId]=useState()
    const [title,setTitle]=useState('')
    const [loading,setLoading]=useState()
    const [toast,setToast]=useState({type:'info',message:''})
    
  return (
    <div>Post</div>
  )
}
