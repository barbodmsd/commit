import React, { useState } from "react";

export default function Result({ a, b, operator }) {
  const [answer, setAnswer] = useState();
  const result = () => {
    switch (operator) {
      case "+":
        return +a + +b;
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
      default:
        return "error";
    }
  };
  return <h2>result:{result}</h2>;
}
