// filter + transform

// ["apple","banana"]
// → uppercase + filter "A"
// → ["APPLE"]

const list = ["apple", "banana"];

const query = "a";
const q = query.toLowerCase();

console.log(
  list
    .filter((item) => item.toLowerCase().includes(q))
    .map((item) => item.toUpperCase()),
);
