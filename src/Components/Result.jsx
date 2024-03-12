import React from "react";

export default function Result({ a, b, operator ,handleState}) {
  const handle = () => {
    switch (operator) {
      case "+":
        return Number(a+b);
        break;
      case "-":
        return a - b;
        break;
      case "*":
        return a * b;
        break;
      case "/":
        return a / b;
        break;
    }
    handleState('')
  };
  return (
    <div>
      <h1>{handle()}</h1>
    </div>
  );
}
