import React from 'react'

export default function ProductDetails({params}) {
  return (
    <div>ProductDetails {params.productId}</div>
  )
}

export const generateMetadata=({params})=>{
  return {
    title:`product id ${params.productId}`
  }
}