import { useState } from "react";

export const Palindrome = () => {
  const [word, setWord] = useState("");
  const normalize = (str: string) =>
    str
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "");

  const isPalindrome = (input: string) => {
    const clean = normalize(input);
    const reversed = clean.split("").reverse().join("");

    return clean === reversed;
  };

  const result = word.length > 0 ? isPalindrome(word) : null;

  return (
    <>
      <input value={word} onChange={(e) => setWord(e.target.value)} />
      <div>{result ? "Palindrome" : "Not Palindrome"}</div>
    </>
  );
};
