import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";
import Main from "./Main";

export default function Sliders() {
  const [heroes, setHeroes] = useState();
  const [index,setIndex]=useState(0)
  useEffect( () => {
   (async()=>{
    try {
        const res = await fetch("http://localhost:3000/heroes");
        const data = await res.json();
        setHeroes(data);
      } catch (error) {
        alert(error);
      }
   })()
  }, []);
  const nextClick = () => {
    index === heroes.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const prevClick = () => {
    index === 0 ? setIndex(heroes.length - 1) : setIndex(index - 1);
  };
  return (
    <div class="slide-container">
      <div class="wrapper">
        <Arrow direction={"prev"} handleClick={prevClick} />
        <Main hero={heroes[index]}/>
        <Arrow direction={"next"} handleClick={nextClick} />
      </div>
    </div>
  );
}
