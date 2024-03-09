import React from 'react'

export default function Header({title}) {
  return (
    <div className="panel-heading">
              <h3 className="panel-title">
                <i className="icon wb-chat-text" aria-hidden="true"></i> {title}
              </h3>
            </div>
  )
}
