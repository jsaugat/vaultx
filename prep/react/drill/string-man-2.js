/* eslint-disable no-unused-vars */
// * ----------------------------------------
// * Where I am slower than I think
// * ----------------------------------------

// * ----- Search highlighting (real UI) -----
const text = "javascript";
const query = "a";

console.log(text.split(new RegExp(`(${query})`, "gi")));

// * ----- Normalize before comparing -----
const word = "  HelloWorld  ";
const query1 = "hello";
const normalizedWord = word.trim().toLowerCase();
const normalizedQuery = query.toLowerCase();

const match = normalizedWord.includes(normalizedQuery);

// * ----- Capitalize every word -----
const sentence = "hello  world from js";

const capitalize = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(" ");
};

console.log(capitalize(sentence));

// * ----- Encode using mapping -----
const map = { a: "1", b: "2", c: "3", d: "3" };

const mapEncoder = (input) => {
  if (typeof input !== "string") return "";
  let output = [];

  for (const char of input.toLowerCase()) {
    const val = map[char];
    if (val === undefined) continue; // skip undefined/null/empty
    output.push(val);
  }
  return output.join("");
};
console.log(mapEncoder("cabx")); // "321"
