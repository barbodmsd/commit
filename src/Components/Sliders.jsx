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
        alert(err);
      }
    })();
  }, []);
  return (
    <div class="slide-container">
      <div class="wrapper">
        {heroes ? (
          <>
            <Arrow />
            <Main heroes={heroes[heroIndex]} />
            <Arrow />
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
