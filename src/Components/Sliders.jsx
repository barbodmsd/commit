import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";
import Main from "./Main";
import { DNA } from "react-loader-spinner";

export default function Sliders() {
  const [heroes, setHeroes] = useState();
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/heroes");
        const data = await res.json();
        setHeroes(data);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);
const  nextSlide=()=>{
    heroIndex===heroes.length-1?setHeroIndex(0):setHeroIndex(heroIndex+1);
  }
  const prevSlide=()=>{
    heroIndex===0?setHeroIndex(heroes.length-1):setHeroIndex(heroIndex-1);
  }
  return (
    <div className="slide-container">
      <div className="wrapper">
        {heroes ? (
          <>
            <Arrow direction={'prev'} handleClick={prevSlide}/>
            <Main hero={heroes[heroIndex]} />
            <Arrow direction={'next'} handleClick={nextSlide}/>
          </>
        ) : (
          <div
            className="d-flex position-fixed justify-content-center align-items-center "
            style={{ inset: 0 }}
          >
            <DNA width={"100px"} height={"100px"} />
          </div>
        )}
      </div>
    </div>
  );
}
