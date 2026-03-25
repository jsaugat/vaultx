## Watch out on these methods

- These mutate the original array
  - array.sort()
  - array.reverse()
  - array.splice()
  - array.unshift()
  - array.shift()
  - array.push()
  - array.pop()

## Learnings

- **SORTING** is displaying data in different manner
  - NOT changing the state (so we dont need state at all to **SORT**)

## Comparators

- **COMPARATOR** is a function that defines the sort order
  - Numbers: (a, b) => a - b
  - Strings: (a, b) => a.localeCompare(b)
  - Date: (a, b) => a.date.getTime() - b.date.getTime()
  - Boolean: (a, b) => a - b (true is 1 and false is 0)
  - Return 0 if no sorting is needed in array.sort() method

## Sets

- Use **SET** if:
  - You want to store unique values of any type (primitive or object)
  - You want to perform operations like union, intersection, and difference on collections of data
  - You want to maintain the order of insertion while ensuring uniqueness
  - You want to check for the presence of an item in a collection efficiently (O(1) time complexity)

## Tech

- [a,b,c,a] -> {a: 2, b: 1, c: 1} -> use reduce to count frequency of items in array

## String Tips

- Always normalize strings before comparing them (e.g., toLowerCase(), trim())
- `[].push("new string")` with `join("")` is more efficent for building large strings `"" += "new string"`
