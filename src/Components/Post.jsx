import React, { useState } from 'react'

export default function Post() {
    const [postId,setPostId]=useState(1)
    const [loading,setLoading]=useState()
    const [title,setTitle]=useState()
    const [toast,setToast]=useState()
  return (
    <div>Post</div>
  )
}
