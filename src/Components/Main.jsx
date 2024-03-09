import React from 'react'
import Chat from './Chat'

export default function Main({massageList,avatar}) {
  const massageItems=massageList?.map((e,index)=>{
    const isLeft=e.type==='receive'
    return <Chat key={index}/>
  })
  return (
    <div className="panel-body">
    <div className="chats">

    </div>
  </div>
  )
}
