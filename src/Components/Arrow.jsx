import React from 'react'

export default function Arrow({direction,handleIndex}) {
  return (
    <div className={`arrow-wrapper`} onClick={handleIndex}>
    <div className={`round`}>
      <div id={`cta`}>
        <span className={`arrow ${direction} `}></span>
      </div>
    </div>
  </div>
  )
}
