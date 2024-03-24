import React, { useState } from 'react'

export default function Post() {
    const [postId,setPostId]=useState(1)
    const [loading,setLoading]=useState(true)
    const [title,setTitle]=useState("")
    const [toast,setToast]=useState({type:'info',message:''})
  return (
    <div>Post</div>
  )
}
