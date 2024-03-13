import React from "react";

export default function Units({ units }) {
  const items = units?.map((e, index) => (
    <div
      key={index}
      className={`one-third ${units.length - 1 === index && "no-border"}`}
    >
      <div className={`stat`}>
        {e.state}<sup>S</sup>
      </div>
      <div className={`stat-value`}>{e.value}</div>
    </div>
  ));
  return <div>{ items }</div>;
}
