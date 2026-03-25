With ~1–1.5 years experience, companies don’t ask crazy algorithm questions. They ask **small UI logic problems** that test:

- state management
- array/string manipulation
- conditional rendering
- event handling
- thinking clearly under pressure

These problems repeat **a lot**.

Below are the **12 patterns** that show up over and over. If you can solve these comfortably, you’ll handle most frontend interview tasks.

---

# 1. Highlight Search Matches

Example:

```
query: "ja"

Jane
Jack
Jason
```

Render:

```
[Ja]ne
[Ja]ck
[Ja]son
```

Tests:

- string manipulation
- regex or slicing
- rendering fragments

Variations:

- highlight all matches
- highlight first match
- debounce search

---

# 2. Debounced Search Input

Typing triggers filtering only after user stops typing.

Example:

```
user types: react
API call happens after 300ms
```

Tests:

- `setTimeout`
- `useEffect`
- cleanup

Typical implementation:

```js
useEffect(() => {
  const timer = setTimeout(() => {
    setDebounced(query);
  }, 300);

  return () => clearTimeout(timer);
}, [query]);
```

---

# 3. Toggle List Item Selection

Example:

```
[ ] Apple
[x] Banana
[ ] Mango
```

Click toggles selection.

Tests:

- array state updates
- immutability
- `map`

---

# 4. Accordion

Example:

```
> Question 1
> Question 2
> Question 3
```

Click expands.

Tests:

- controlled state
- conditional rendering

Variation:

```
only one open at a time
```

---

# 5. Tabs

Example:

```
[Home] [Profile] [Settings]

Home content
```

Tests:

- state switching
- conditional rendering

---

# 6. Infinite Scroll / Load More

Example:

```
10 items shown
click "Load More"
show next 10
```

Tests:

- slicing arrays
- pagination logic

---

# 7. Sorting Table

Example:

```
Name     Age
Alice    25
Bob      30
```

Click column header:

```
ascending / descending
```

Tests:

- `Array.sort`
- comparator functions

---

# 8. Filter + Sort Combined

Example:

```
filter by name
sort by age
```

Tests:

- derived state
- chaining operations

```
data
  .filter(...)
  .sort(...)
```

---

# 9. Form Validation

Example:

```
Email required
Password min 6 chars
```

Tests:

- form state
- error messages
- controlled inputs

---

# 10. Character Counter

Example:

```
textarea
200 characters max
```

Tests:

- controlled inputs
- string length

---

# 11. Drag Reorder List

Example:

```
Task A
Task B
Task C
```

Drag to reorder.

Tests:

- array manipulation
- index swapping

---

# 12. Todo App (classic)

Example:

```
Add todo
Toggle complete
Delete
Filter
```

Tests:

- everything together

---

# The 7 String Tricks That Solve 80% of These

Memorize these operations.

---

## 1. `split`

Break string into pieces.

```
text.split(" ")
```

Important variation:

```
split(regex with capture)
```

Used for highlighting.

---

## 2. `includes`

Check substring.

```
text.includes(query)
```

Case insensitive:

```
text.toLowerCase().includes(query.toLowerCase())
```

---

## 3. `indexOf`

Find position.

```
text.indexOf(query)
```

Used with `slice`.

---

## 4. `slice`

Extract substring.

```
text.slice(start, end)
```

Example:

```
banana
slice(1,3) → an
```

---

## 5. `replace`

Replace substring.

```
text.replace("cat", "dog")
```

Regex version:

```
text.replace(/cat/g, "dog")
```

---

## 6. `match`

Find regex matches.

```
text.match(/an/g)
```

---

## 7. Regex Capture Groups

Most powerful trick.

```
split(/(query)/gi)
```

Keeps the match.

Used in highlight problems.

---

# The Interview Reality

For someone with **~1.5 years experience**, interview tasks are usually combinations like:

Example:

```
Search input
+ highlight match
+ debounce
```

or

```
sortable table
+ filter input
```

Not insane problems.

---

# What I’d train if I were you (seriously)

You said you have about **40–50 days before applying**.

I’d do:

```
3 UI problems per day
```

For 10 days.

That’s **30 problems**, which is enough to build pattern recognition.

After that, these questions stop feeling random.

---

If you want, I can also give you something **much more useful for your situation**:

**15 real frontend interview questions that companies actually give in live coding rounds** (React-focused, not algorithmic).

These are the ones where people with **1–2 years experience usually choke**, so training them gives huge leverage.
