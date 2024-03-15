import React from "react";
import Arrow from "./Arrow";
import Main from "./Main";

export default function Sliders() {
    
  return (
    <div class="slide-container">
      <div class="wrapper">
        <Arrow />
        <Main />
        <Arrow />
      </div>
    </div>
  );
}
