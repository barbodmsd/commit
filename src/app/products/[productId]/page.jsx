import React from 'react'

export default function ProductDetails({params}) {
    console.log(params)
  return (
    <div>ProductDetails {params.productId}</div>
  )
}
