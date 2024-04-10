import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'

export default function Post() {
    const [postId,setPostId]=useState(1)
    const [loading,setLoading]=useState()
    const [title,setTitle]=useState()
    const [toast,setToast]=useState({type:'info',message:''})

    useEffect(async()=>{
        try {
            const res=await fetch(``)
            const data=await res.json()
            if(data.title){
                setLoading(false)
                setTitle(data.title)
                setToast({type:"success",message:`post with id ${postId} loaded`})
            }else{
                throw new Error(`post with id ${postId} not founded `)
            }
        } catch (error) {
            setLoading(false)
            setToast({type:'error',message:error.message})
            
        }
    },[postId])
  return (
    <div>Post</div>
  )
}
