import React, { useEffect, useRef } from "react";

export default function Ref() {
  const inputRef = useRef();
  const divEl = useRef();
  useEffect(() => {
    divEl.current.style.backgroundColor = inputRef.current.value;
  }, [inputRef ]);

  return (
    <>
      <input ref={inputRef} type="text" />
      <div ref={divEl}>Color change</div>
      <button>Click</button>
    </>
  );
}
