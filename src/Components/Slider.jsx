import React, { useState } from "react";
import Arrow from "./Arrow";
import Card from "./Card";

export default function Slider() {
    const [heroes,setHeroes]=useState()
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
