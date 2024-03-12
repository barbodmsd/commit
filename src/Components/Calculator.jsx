import React, { useState } from "react";
import Result from "./Result";

export default function Calculator() {
  const [firstInp, setFirstInp] = useState();
  const [secondInp, setSecondInp] = useState();
  const [select, setSelect] = useState();
  const [click, setClick] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(!click);
  };
  const handleState=(s)=>{
    setFirstInp(s)
    setSecondInp(s)
    setSelect(s)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setFirstInp(e.target.value)} />
        <input type="text" onChange={(e) => setSecondInp(e.target.value)} />
        <select onChange={(e) => setSelect(e.target.value)}>
          <option value="">Choose Operator</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {click && <Result a={firstInp} b={secondInp} operator={select} handleState={handleState}/>}
    </div>
  );
}
