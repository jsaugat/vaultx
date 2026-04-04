import { useEffect, useState } from "react";

const ALPHABETS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const n = 3;

export const CaesarCipher = () => {
  const [input, setInput] = useState("");

  const cipherIndex = (idx: number) => {
    return (idx + n) % 26;
  };

  const output = input
    .split("")
    .map((letter) => ALPHABETS[cipherIndex(ALPHABETS.indexOf(letter))])
    .join("");

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      {output}
    </div>
  );
};
