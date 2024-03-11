import React, { useEffect, useState } from "react";

export default function ChangeTitle() {
  const [title, setTitle] = useState("change title");
  useEffect(()=>{
    document.title=title
  },[title])
  return (
    <div>
      <input
        type="text"
        placeholder="enter..."
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
