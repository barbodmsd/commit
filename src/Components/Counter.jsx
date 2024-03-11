import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>count:{count}</h2>
      <button
        className="btn btn-danger"
        disabled={!count}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <button className="btn btn-success" onClick={increase}>
        +
      </button>
    </div>
  );
}
