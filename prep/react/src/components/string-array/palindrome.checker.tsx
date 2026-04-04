import { useState } from "react";

export const PalindromeChecker = () => {
  const [input, setInput] = useState("");

  const isPalindrome = (rawString: string) => {
    const value: string = rawString.toLowerCase();

    let left: number = 0;
    let right: number = value.length - 1;

    while (left < right) {
      if (value[left] !== value[right]) return false;

      left++;
      right--;
    }
    return true;
  };

  const result = isPalindrome(input);

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {input && (result ? "palindrome" : "not palindrome")}
    </>
  );
};
