// Count frequency
// ["a","b","a"] → {a:2, b:1}

const list = ["a", "b", "a", "c", "c", "c", "c"];

const reduced = list.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

// Invert Map
// {a: 2, b: 1} -> {1: "b", 2: "a"}

const ob = { a: 2, b: 1 };
const objj = Object.fromEntries(
  //[[a, 4],[c,1]] -> {a:4, c:1}
  Object.entries(ob).map(([key, value]) => [value, key]),
);

// Group by first letter
// ["apple","banana","apricot"]
// → {a:["apple","apricot"], b:["banana"]}

const fruits = ["apple", "banana", "apricot"];
const groupedByFirstLetter = fruits.reduce((acc, val) => {
  const initial = val[0];

  if (!acc[initial]) {
    acc[initial] = [];
    acc[initial].push(val);
  } else {
    acc[initial].push(val);
  }

  return acc;
}, {});

// Lookup map
// {2:"abc", 3:"d"} → {a:"2", b:"2", c:"2", d: "3"}

const data = { 2: "abc", 3: "d" };

const lookupMap = Object.entries(data).reduce((acc, [key, val]) => {
  val.split("").forEach((char) => {
    acc[char] = key;
  });

  return acc;
}, {});

console.log(lookupMap);
