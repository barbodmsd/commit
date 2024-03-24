import React, { useState } from "react";
import Arrow from "./Arrow";
import Main from "./Main";

export default function Sliders() {
    const [heroes,setHeroes]=useState(null)
    const [index,setIndex]=useState(null)
    
  return (
    <div class="slide-container">
      <div class="wrapper">
       <Arrow/>
        <Main/>
        <Arrow/>
      </div>
    </div>
  );
}
