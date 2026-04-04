import { useState } from "react";

export const WordCounter = () => {
  const [text, setText] = useState("");

  const count = text.split(/\s/).filter(Boolean).length;

  return (
    <>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <div>Word: {count}</div>
    </>
  );
};
