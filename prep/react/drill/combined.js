// * ----------------------------------------
// * Combined Operations (This is where you break)
// * ----------------------------------------

// * ----- Search + limit + transform -----

const products = ["apple", "banana", "apricot", "grape"];
const query = "ap";
const limit = 2;

const searchProducts = (products, query, limit) => {
  return products
    .filter((p) => p.toLowerCase().includes(query.toLowerCase()))
    .slice(0, limit)
    .map((item) => item.toUpperCase());
};
console.log(searchProducts(products, query, limit));

// * ----- Selected items -----
const selected = ["A", "B", "C", "D"];

const toggleSelectedItems = (val) => {
  if (selected.includes(val)) {
    return selected.filter((item) => item !== val);
  } else {
    return [...selected, val];
  }
};
console.log(toggleSelectedItems("A"));

// * ----- Derive visible items -----
const deriveVisibleItems = (users, query) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return users.filter((item) => item.toLowerCase().includes(q));
};

console.log(deriveVisibleItems(["Jack", "Jane", "Alex"], ""));

// * ----- Keypad map -----
const map = {
  2: "abc",
  3: "def",
};

const digitLookup = Object.entries(map).reduce((acc, [digit, letters]) => {
  letters.split("").forEach((letter) => {
    acc[letter] = digit;
  });

  return acc;
}, {});
console.log(digitLookup);

// * ----- Partial Match Search -----
const partialMatchSearch = (names, input) => {
  return names.filter((name) => new RegExp(`^${input}`, "i").test(name));
};
console.log(partialMatchSearch(["sau", "sagar", "saujan"], "sau"));

// * ----- Multi-step transform -----
const items = ["a1", "b1", "a30"];

const filtered = items.filter((i) => i.startsWith("a"));
const result = filtered.reduce((acc, item) => {
  acc += Number(item.match(/[0-9]/gi).join(""));
  return acc;
}, 0);
console.log(result);
