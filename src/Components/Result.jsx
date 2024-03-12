import React, { useState } from "react";

export default function Result({ inputOne, inputTwo, operator }) {
  // const result = () => {
  //   switch (operator) {
  //     case "+":
  //       return +a + +b;
  //       break;
  //     case "-":
  //       return a - b;
  //       break;
  //     case "/":
  //       return a / b;
  //       break;
  //     case "*":
  //       return a * b;
  //       break;
  //     default:
  //       return "error";
  //   }
  // };
  return <h2>result:{`${inputOne}${operator}${inputTwo}`}</h2>;
}
