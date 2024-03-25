import React, { useState } from 'react'

export default function Post() {
    const [postId,setPostID]=useState(1)
    const [loading,setLoading]=useState()
    const [title,setTitle]=useState('')
    const [toast,setToast]=useState({type:'info',massage:''})
  return (
    <div>Post</div>
  )
}
