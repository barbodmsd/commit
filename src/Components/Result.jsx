import React, { useState } from "react";

export default function Result({ a, b, operator }) {
  const [answer,setAnswer]=useState()
    const result = () => {
      switch (operator) {
        case "+":
          return setAnswer(a + b);
          break;
        case "-":
          return a - b;
          break;
        case "/":
          return a / b;
          break;
        case "*":
          return a * b;
          break;
      }
    };
  return (
    <div>
      <h2>Answer:{answer}</h2>
    </div>
  );
}
