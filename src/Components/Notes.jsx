import React from 'react'
import Note from './Note'

export default function Notes() {
    const list=[
        {title:'title',content:'content'},
        {title:'title',content:'content'},
        {title:'title',content:'content'},
        {title:'title',content:'content'},
        {title:'title',content:'content'},
    ]
    const items=list?.ap((e,index)=><Note key={index} title={e.title } content={e.content}/>)
  return (
    <div className='d-flex justify-content-center gsp-3'>
        {items}
    </div>
  )
}
