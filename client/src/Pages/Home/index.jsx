
import React, { useContext, useEffect } from 'react'
import AuthContext from '../../Utils/authContext'

export default function Home() {
  const user=useContext(AuthContext)
  console.log(user)
  // useEffect(()=>{
  //   (async()=>{
  //     try {
  //       const res=await fetch('')
  //       const data=await res.json()

  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })()
  // },[])
  return (
    <div>Home</div>
  )
}
