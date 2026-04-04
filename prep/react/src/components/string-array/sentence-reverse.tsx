import { useState } from "react";

export function SentenceReverse() {
  const [input, setInput] = useState("");
  const output = input.split(/\s+/).reverse().join(" ");

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type..."
      />
      <p>{output}</p>
    </div>
  );
}
