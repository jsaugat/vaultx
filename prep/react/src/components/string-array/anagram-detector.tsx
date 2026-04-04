import { useState } from "react";

export const AnagramDetector = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const normalizeStr = (str: string) => {
    return str.toLowerCase().replace(/\s/g, "");
  };

  const isAnagram = () => {
    const a = normalizeStr(input1);
    const b = normalizeStr(input2);

    if (a.length !== b.length) return false;

    const count: Record<string, number> = {};
    for (const char of a) count[char] = (count[char] || 0) + 1;
    for (const char of b) count[char] = (count[char] || 0) - 1;
    return Object.values(count).every((v) => v === 0);
  };

  return (
    <>
      <input value={input1} onChange={(e) => setInput1(e.target.value)} />
      <input value={input2} onChange={(e) => setInput2(e.target.value)} />
      <div
        style={{
          color: input1 && input2 ? (isAnagram() ? "lightgreen" : "red") : "",
        }}
      >
        {input1 && input2 ? (isAnagram() ? "BINGO!" : "MEH!") : ""}
      </div>
    </>
  );
};
