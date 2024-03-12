import React from "react";
import B from "./B";

export default function A() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = setState("");
  const [select, setSelect] = useState("");
  const [showResult, setShowResult] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(!showResult);
    <B a={firstInput} b={secondInput} op={select} />;
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstInput}
          onChange={(e) => setFirstInput(e.target.value)}
        />
        <input
          type="text"
          value={secondInput}
          onChange={(e) => setSecondInput(e.target.value)}
        />
        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="">Choose operator</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
