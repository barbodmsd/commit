import React from 'react'

export default function Review({params}) {
    console.log(params)
  return (
    <div>products {params.productId} review {params.reviewId}</div>
  )
}
