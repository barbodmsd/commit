import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";
import Main from "./Main";

export default function Sliders() {
    const [heroes,setHeroes]=useState(null)
    const [index,setIndex]=useState(null)
    useEffect(async()=>{
        try {
            const res=await fetch('http://localhost:3000/heroes')
            const data=await res.json()
            setHeroes(data)
            setIndex(0)
        } catch (error) {
            alert(error)
        }
    },[])
    
  return (
    <div class="slide-container">
      <div class="wrapper">
       <Arrow direction={'prev'} handleClick={handleClick}/>
        <Main/>
        <Arrow direction={'next'} handleClick={handleClick}/>
      </div>
    </div>
  );
}
