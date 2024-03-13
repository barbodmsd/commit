import React from "react";

export default function Units({ units }) {
  const items = units?.map((e, index) => (
    <div
      key={index}
      className={`one-third ${units.length - 1 === index && "no-border"}`}
    >
      <div className={`stat`}>
        20<sup>S</sup>
      </div>
      <div className={`stat-value`}>Training</div>
    </div>
  ));
  return { items };
}
