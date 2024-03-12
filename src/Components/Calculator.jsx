import React, { useState } from "react";
import Result from "./Result";

export default function Calculator() {
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");
  const [operator, setOperator] = useState("");
  const [showResult, setShowResult] = useState(false);
  let result
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(!showResult);
    <Result inputOne={inp1} inputTwo={inp2} operator={operator} />;
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
        <button disabled={operator===''}  type="submit">{(operator==='')?'No':'Submit'}</button>
        {showResult && <Result/>}
      </form>
    </div>
  );
}
