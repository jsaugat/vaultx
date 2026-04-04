import { useState } from "react";

export function PigLatin() {
  const [input, setInput] = useState("");

  const toPigLatin = (word: string) => {
    if (word === "") return "";

    // Vowel case
    const startsWithVowel = /^[aeiou]/i;
    if (startsWithVowel.test(word)) return word + "way";

    // Consonant case
    const cluster = word.match(/^[^aeiou]+/i)?.[0] || "";
    return word.slice(cluster.length) + cluster + "ay";
  };

  const output = input.split(" ").map(toPigLatin).join(" ");

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type..."
      />
      <p>{output}</p>
    </div>
  );
}

// learning: to check if a string starts with a vowel, you don't need an array like ["a","e","i","o","u"]
// and .includes() — instead use a regex /^[aeiou]/i where ^ means "starts with",
// [aeiou] is the vowel set, and /i makes it case insensitive. then just call .test(word)
// which returns true or false. cleaner than array approach and handles uppercase automatically.

// Cheatsheet
// .match() regex cheat sheet

"hello".match(/^hell/); // starts with "hell"
"hello".match(/llo$/); // ends with "llo"
"hello".match(/ell/); // contains "ell"
"hello123".match(/\d+/); // contains numbers
"hello".match(/^\d+$/); // is only numbers
"hello".match(/^[a-zA-Z]+$/); // is only letters
"hello".match(/^[^aeiou]+/); // leading consonants
"hello".match(/[aeiou]+/g); // all vowels
"hello world".match(/\b\w+\b/g); // all words
"  hi  ".match(/^\s|\s$/); // has leading/trailing spaces
"hello123".match(/[^a-zA-Z0-9]/); // has special characters (returns null if clean)
