import React, { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    let timeInt = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log(new Date().toLocaleTimeString());
    }, 1000);
    return ()=>clearInterval(time) // This will be called when this component unmounts
  }, []);
  return <div>{time}</div>;
}
