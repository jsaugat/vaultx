import { useState } from "react";

export const CamelToKebab = () => {
  const [input, setInput] = useState("");

  const toKebab = (str: string) =>
    str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="camelCase..."
      />
      <p>{toKebab(input)}</p>
    </div>
  );
};
