console.log(typeof null); // "object"
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log([] + []);
console.log([] + {});
console.log({} + []);

for (var i = 0; i < 3; i++) {
  console.log(i, " i");
  setTimeout(() => console.log(i), 0);
}

function capitalize(str) {
  const splitWords = str.split(" ");

  return splitWords
    .map(
      (word) =>
        word.toUpperCase().split("")[0] +
        word.toLowerCase().slice(1, word.length),
    )
    .join(" ");
}
console.log(capitalize("saUgat Joshi"));
