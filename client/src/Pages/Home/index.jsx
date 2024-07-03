import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const {user}=useSelector(state=>state.authSlice)
  console.log(user)
  return (
    <div>Home</div>
  )
}

