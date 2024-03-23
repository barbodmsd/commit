import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";
import Card from "./Card";
import { DNA } from "react-loader-spinner";

export default function Slider() {
  const [heroes, setHeroes] = useState();
  const [loading, setLoading] = useState(true);
  const [currentIndex,setCurrentIndex]=useState(0)
  useEffect(async () => {
    try {
      const res = await fetch("http://localhost:3000/heroes");
      const data = await res.json();
      setHeroes(data);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }, []);
  return (
    <div class="slide-container">
      <div class="wrapper">
        <>
          {loading ? (
            <>
              <Arrow direction={"prev"} handleClick />
              <Card hero={heroes[currentIndex]} />
              <Arrow direction={"next"} handleClick />
            </>
          ) : (
            <div
              className="d-flex justify-content-center align-items-center position-fixed "
              style={{ inset: 0 }}
            >
              <DNA width={'100px'} height={'100px'} />
            </div>
          )}
        </>
      </div>
    </div>
  );
}
