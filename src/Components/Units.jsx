import React from 'react'

export default function Units({unit}) {
    const items=unit?.map((e,index)=><div className={`one-third `}>
    <div className={`stat`}>{e.state}</div>
    <div className={`stat-value`}>{e.value}</div>
  </div>)
  return (
    <>{items}</>
  )
}
