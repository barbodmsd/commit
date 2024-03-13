import React from `react`;
import Arrow from "./Arrow";
import { useEffect, useState } from "react";
import Main from "./Main";

export default function Sliders() {
    const [heroes,setHeroes]=useState()
    const [currentIndexHeroes,setCurrentIndexHeroes]=useState()
    useEffect(()=>{
        (async()=>{
            try{
                const res=await fetch('http://localhost:3000/heroes')
                const data=await res.json()
                setHeroes(data)
            }catch(err){alert(err)}
        })()
    },[])
  return (
    <div className={`slide-container`}>
      <div classNameName={`wrapper`}>
       {heroes?<> <Arrow direction={'prev'}/>
        <Main/>
        <Arrow direction={'next'}/></>:}
      </div>
    </div>
  );
}
