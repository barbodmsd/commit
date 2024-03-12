import React, { useState } from "react";

export default function Calculator() {
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState();
  const [showResult, setShowResult] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(!showResult);
    switch (operator) {
      case "+":
        setResult(inp1 + inp2);
        break;
      case "-":
        setResult(inp1 - inp2);
        break;
      case "*":
        setResult(inp1 * inp2);
        break;
      case "/":
        setResult(inp1 / inp2);
        break;
      default:
        setResult("Error");
    }
    setInp1("");
    setInp2("");
    setOperator("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inp1}
          placeholder="Number:"
          autoFocus
          onChange={(e) => setInp1(e.target.value)}
        />
        <input
          type="text"
          value={inp2}
          placeholder="Number:"
          onChange={(e) => setInp2(e.target.value)}
        />
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option>choose Operator </option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select>
        <button disabled={operator === ""} type="submit">
          {operator === "" ? "No" : "Submit"}
        </button>
        {showResult && <h3>{`Result:${result}`}</h3>}
      </form>
    </div>
  );
}
