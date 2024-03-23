import React, { useEffect, useRef } from "react";

export default function Ref() {
  const inputRef = useRef();
  const divEl = useRef();
  useEffect(() => {
    divEl.current.style.backgroundColor = inputRef.current.value;
  }, [inputRef.current.value]);

  return (
    <>
      <input type="text" />
      <div>Color change</div>
      <button>Click</button>
    </>
  );
}
