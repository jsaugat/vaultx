import React, { useEffect, useState } from "react";

const vowels = ["a", "e", "i", "o", "u"];

export const VowelCounter = () => {
  const [text, setText] = useState("");

  //
  const count = text
    .toLowerCase()
    .split("")
    .filter((char) => vowels.includes(char)).length;

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      Live count: <div>{count}</div>
    </div>
  );
};
