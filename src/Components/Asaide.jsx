import React from 'react'

export default function Asaide({posts,handleTitle}) {
    const listTitle=posts?.map((e,index)=><li key={index} onClick={()=>handleTitle(index)}>{e.title}</li>)
  return (
    <div>

<aside>
            <ul>
                {listTitle}
            </ul>

        </aside>
    </div>
  )
}
