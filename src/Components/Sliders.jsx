import React from "react";
import Arrow from "./Arrow";
import { useEffect, useState } from "react";
import Main from "./Main";

export default function Sliders() {
  const [heroes, setHeroes] = useState();
  const [currentIndexHeroes, setCurrentIndexHeroes] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/heroes");
        const data = await res.json();
        setHeroes(data);
      } catch (err) {
        alert(err);
      }
    })();
  }, []);
  const nextSlide = () => {
    setCurrentIndexHeroes(
      currentIndexHeroes === heroes.length - 1
        ?  0
        : currentIndexHeroes + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndexHeroes(
      currentIndexHeroes === 0
        ? heroes.length - 1
        : currentIndexHeroes - 1
    );
  };
  return (
    <div className={`slide-container`}>
      <div classNameName={`wrapper`}>
        {heroes ? (
          <>
            {" "}
            <Arrow direction={"prev"} handleIndex={prevSlide} />
            <Main hero={heroes[currentIndexHeroes]} />
            <Arrow direction={"next"} handleIndex={nextSlide} />
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}
