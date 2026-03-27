// group items by category

const source = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
];

const grouped = source.reduce((acc, item) => {
  acc[item.category] ??= [];
  acc[item.category].push(item.name);

  return acc;
}, {});

console.log(grouped);

// Pagination | limit 10 | page1 => 0 - 9 | page2 => 10 - 19
const startIndex = (page - 1) * limit;
const endIndex = startIndex + limit;
