// Highlight substr
// "text: banana", query: "an"
// → ["b", "an", "an", "a"] // split parts

"banana".split(/(an)/g).filter(Boolean);

// Check startsWith (case insensitive)
// "Jack", "ja" → true

/^ja/gi.test("Jack");

// Remove invalid characters
// "abc123!!" → "abc"

"abc123@#$#@".replace(/[^a-zA-Z]/, "");

// Convert string via map (T9 logic in disguise)
// "abc" → map each char → "123"

const lookupMap = {
  a: "1",
  b: "2",
  c: "3",
};
const str = "abc";
let result = "";
for (const char of str) {
  result += lookupMap[char];
}
console.log(result);
