import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";
import Card from "./Card";

export default function Slider() {
    const [heroes,setHeroes]=useState()
    useEffect(async()=>{
        try{
            const res=await fetch('http://localhost:3000/heroes')
            const data=await res.json()
            setHeroes(data)
        }catch(error){alert(error)}
    },[])
  return (
    <div class="slide-container">
      <div class="wrapper">
        <Arrow direction={'prev'} handleClick/>
        <Card />
        <Arrow direction={'next'}  handleClick/>
      </div>
    </div>
  );
}
