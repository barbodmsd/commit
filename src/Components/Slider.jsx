import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";
import Card from "./Card";
import { DNA } from "react-loader-spinner";

export default function Slider() {
  const [heroes, setHeroes] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  useEffect(async () => {
    try {
      const res = await fetch("http://localhost:3000/heroes");
      const data = await res.json();
      setHeroes(data);
      setCurrentIndex(0);
    } catch (error) {
      alert(error);
    }
  }, []);
  return (
    <div class="slide-container">
      <div class="wrapper">
        {heroes ? (
          <>
            <Arrow direction={"prev"} />
            <Card hero={heroes[currentIndex]} />
            <Arrow direction={"next"} />
          </>
        ) : (
          <div
            className="d-flex justify-content-center align-items-center position-fixed "
            style={{ inset: 0 }}
          >
            <DNA width={"100px"} height={"100px"} />
          </div>
        )}
      </div>
    </div>
  );
}
