import React from 'react'

export default function Comments({comments}) {
    const list=comments?.map((e,index)=><div key={index}>
        <p>{e.body}</p>
    </div>)
  return (
    <div class="comments">
    <p>Comments:</p>
   {list}
</div>
  )
}
