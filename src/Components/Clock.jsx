import React, { useState } from 'react'
import Time from './Time'

export default function Clock() {
    const [showTime,setShowTime]=useState(false)
    const handleClick=()=>{
        setShowTime(!showTime);
    }
  return (
    <div>
        {showTime&&<Time/>}
        <button onClick={handleClick}>{showTime?'Hide Time':"Show Time"}</button>
    </div>
  )
}
