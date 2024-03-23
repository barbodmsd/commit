import React from "react";
import Arrow from "./Arrow";
import Card from "./Card";

export default function Slider() {
  return (
    <div class="slide-container">
      <div class="wrapper">
        <Arrow />
        <Card />
        <Arrow />
      </div>
    </div>
  );
}
