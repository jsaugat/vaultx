/* eslint-disable no-unused-vars */
// * ----------------------------------------
// * 1. List Reordering / Mutations
// * ----------------------------------------

// * ----- Priority Dump -----

const list = ["task1", "task2", "task3", "task4"];
const urgentTask = "task3";

const bumped = [urgentTask, ...list.filter((item) => item !== urgentTask)];

// * ----- Drag Drop Simulation -----

const items = ["A", "B", "C", "D", "E"];

const drapDrop = (from, to) => {
  [items[from], items[to]] = [items[to], items[from]];

  return items;
};

// * ----- Remove duplicates but keep last occurence -----

const dups = ["A", "B", "A", "C", "B"];
const dupsClone = [...dups];
const remDupResultSet = [...new Set(dupsClone.reverse())].reverse();
// or
const remDupResultFilter = dups.filter(
  (item, idx) => idx === dups.lastIndexOf(item),
);

// * ----- Replace item conditionally -----
const itemsToReplace = ["apple", "banana", "grape"];
const replacedItems = itemsToReplace.map((item) =>
  item.includes("an") ? "X" : item,
);

// * ----------------------------------------
// * Real Data Transformations
// * ----------------------------------------
// * ----- API response shaping -----

const response = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Jane" },
];
const transformedResponse = response.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

// * ----- Build reverse index -----
const animals = ["cat", "car", "dog"];
const reverseIndexedAnimals = animals.reduce((acc, item) => {
  const initial = item?.[0];

  if (!acc[initial]) {
    acc[initial] = {};
    acc[initial].items = [];
    acc[initial].count = 0;
  }
  acc[initial].items.push(item);
  acc[initial].count += 1;

  return acc;
}, {});
const reverseIndexedAnimals2 = animals.reduce((acc, item) => {
  const key = item?.[0];

  acc[key] ??= { items: [], count: 0 };
  acc[key].items.push(item);
  acc[key].count++;

  return acc;
}, {});

// * ----- Merge by key -----
const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
const updates = [{ id: 2, name: "B2" }];

// Build updates look up table (Method 1: using reduce)
const updatesLookUp = updates.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

// Build updates look up table (Method 2 (Better): using Object.fromEntries)
const updatesLookUp2 = Object.fromEntries(
  updates.map((item) => [item.id, item]),
);

const updatedUsers = users.map((item) => updatesLookUp2[item.id] ?? item);
// console.log(updatedUsers);
