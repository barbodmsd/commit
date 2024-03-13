import React, { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log(new Date().toLocaleTimeString())
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <h2>{time}</h2>;
}
