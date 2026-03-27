import { useEffect, useState } from "react";

export const AnagramDetector = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [isAna, setIsAna] = useState(false);

  const sortInput = (input: string) => {
    const list = input.split("");
    return list.sort((a: string, b: string) => a.localeCompare(b)).join("");
  };

  const handleCheck = () => {
    setIsAna(sortInput(input1) === sortInput(input2));
  };

  return (
    <>
      <input value={input1} onChange={(e) => setInput1(e.target.value)} />
      <input value={input2} onChange={(e) => setInput2(e.target.value)} />

      <div>result: {isAna ? "bingo" : "no"}</div>

      <button onClick={() => handleCheck()}>check</button>
    </>
  );
};
