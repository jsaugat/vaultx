import { useState } from "react";

const buttons = {
  1: "",
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
  0: " ",
};

const users = ["Alice", "Jack", "Jane", "Suman", "Christina", "Saugat"];

// build letter -> digit map
const letterToDigit: { [key: string]: string } = {};
Object.entries(buttons).forEach(([digit, letters]) => {
  console.log("letters", letters.split(""));
  letters.split("").forEach((l) => {
    letterToDigit[l] = digit;
  });
});

console.log(letterToDigit, "letterToDigit");

// convert name to T9 number
const nameToDigits = (name) =>
  name
    .toLowerCase()
    .split("")
    .map((c) => letterToDigit[c] || "")
    .join("");

export const T9Keypad = () => {
  const [query, setQuery] = useState("");

  const filteredUsers = users.filter((user) => {
    const digits = nameToDigits(user);
    return digits.startsWith(query);
  });

  return (
    <div className="phone">
      <h3>Query: {query}</h3>

      <div className="screen">
        {filteredUsers.map((user) => (
          <div key={user}>{user}</div>
        ))}
      </div>

      <div className="keypad">
        {Object.keys(buttons).map((digit) => (
          <button key={digit} onClick={() => setQuery((prev) => prev + digit)}>
            {digit}
            <div style={{ fontSize: "10px" }}>{buttons[digit]}</div>
          </button>
        ))}
      </div>

      <button onClick={() => setQuery("")}>Clear</button>
    </div>
  );
};
