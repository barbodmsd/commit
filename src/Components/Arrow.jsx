import React from 'react'

export default function Arrow({direction}) {
  return (
    <div className="arrow-wrapper">
    <div className="round">
      <div id="cta">
        <span className={`arrow ${direction}`}></span>
      </div>
    </div>
  </div>
  )
}
