import React from 'react'

export default function SideBar({posts,handleTitle}) {
    const titleItems=posts?.map((e,index)=><li key={index} onClick={()=>handleTitle(index)}>{e.title}</li>)
  return (
    <aside>
            <ul>
                {titleItems}
            </ul>

        </aside>
  )
}
