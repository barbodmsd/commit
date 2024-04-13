import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const {id}=useParams()
  const [product,setProduct]=useState()
  
  return (
    <div>ProductDetails</div>
  )
}
