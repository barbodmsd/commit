import React, { useState } from "react";
import Time from "./Time";

export default function Clock() {
  const [showTime, setShowTime] = useState(true);
  return (
    <div>
      {showTime && <Time />}
      <button
        className={`btn ${showTime ? "btn-danger " : "btn-success"}`}
        onClick={!showTime}
      >
        ${showTime ? "Hide time" : "Show time"}
      </button>
    </div>
  );
}
