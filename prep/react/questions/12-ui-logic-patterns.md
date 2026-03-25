Ten days is enough **if you train the right patterns**. Most frontend interviews for ~1–2 year devs recycle the **same UI + logic problems**. If you drill these, the chance of freezing drops massively.

Below are the **12 patterns** you should practice. These cover probably **70–80% of frontend coding rounds**.

---

# 1. Search + Highlight

What you just did.

Features usually added:

- filtering
- highlight matches
- debounce input
- keyboard navigation

Example:

```
input: "ja"

Jane
Jack
Jason
```

Output:

```
[Ja]ne
[Ja]ck
[Ja]son
```

Skills tested:

- string manipulation
- regex or slicing
- rendering fragments

---

# 2. Debounced Search Input

Very common.

Example:

```
API call only after user stops typing for 300ms
```

Implement:

```
useDebounce
```

or

```
setTimeout + clearTimeout
```

Skills:

- `useEffect`
- cleanup
- timers

---

# 3. Toggle / Expand List (Accordion)

Example:

```
Question 1
Question 2
Question 3
```

Click → expand answer.

Edge cases:

- only one open
- multiple open

Skills:

```
state control
conditional rendering
```

---

# 4. Selectable List

Example:

```
□ Apple
□ Banana
□ Orange
```

Variants:

- multi select
- single select
- select all

Skills:

```
array state updates
map/filter
```

---

# 5. Infinite Scroll

Example:

```
Load more items when scrolling bottom
```

Skills:

```
IntersectionObserver
pagination
loading state
```

Very common in interviews.

---

# 6. Pagination

Example:

```
1 2 3 4 5 Next
```

Edge cases:

- disable previous
- page boundaries
- slicing data

Core logic:

```
start = (page - 1) * pageSize
end = start + pageSize
```

---

# 7. Sortable Table

Example:

```
Name ↑↓
Age ↑↓
Salary ↑↓
```

Click header → sort.

Skills:

```
Array.sort
compare functions
state
```

---

# 8. Form Validation

Typical requirements:

```
email required
password min length
confirm password match
```

Skills:

```
controlled inputs
validation logic
error states
```

Libraries sometimes allowed:

```
react-hook-form
zod
```

But interviewers may ask **vanilla validation**.

---

# 9. Chip Input / Tag Input

Example:

```
[React] [JavaScript] [TypeScript]  ✕
```

Type text → press Enter → create tag.

Skills:

```
keyboard events
array state
deleting items
```

---

# 10. Drag Reorder List

Example:

```
1. Task A
2. Task B
3. Task C
```

Drag to reorder.

Simplified interview version:

```
move item up/down
```

Skills:

```
array reordering
splice
indexes
```

---

# 11. Star Rating

Example:

```
☆ ☆ ☆ ☆ ☆
```

Hover:

```
★ ★ ★ ☆ ☆
```

Click:

```
rating saved
```

Skills:

```
hover state
mapping
UI state separation
```

---

# 12. Modal / Dialog

Example:

```
Click button → open modal
ESC closes modal
click outside closes modal
```

Skills:

```
portals
event handling
state control
```

---

# The Hidden Skills Behind These

Interviewers are actually testing **these primitives**:

```
1. array map
2. array filter
3. array sort
4. slice
5. string split
6. regex
7. state updates
8. conditional rendering
```

That's it.

Most UI questions reduce to those.

---

# Your 10-Day Training Plan

Be disciplined.

### Day 1

Search + highlight
Debounce input

---

### Day 2

Accordion
Selectable list

---

### Day 3

Pagination
Sortable table

---

### Day 4

Form validation
Tag input

---

### Day 5

Star rating
Modal

---

### Day 6

Infinite scroll

---

### Day 7

Drag reorder list

---

### Day 8

Redo everything **without looking**

---

### Day 9

Mock interviews (time limit)

---

### Day 10

Focus on weak spots

---

# One harsh truth

Your earlier freeze happened because you **haven't solved enough UI logic problems**.

Framework knowledge ≠ interview readiness.

You need **pattern repetition**.

After solving ~30–40 of these problems:

```
brain sees pattern → solution appears immediately
```

---

If you want, I can also give you something **extremely valuable for your next 10 days**:

**15 exact frontend coding questions that companies like to give in interviews** (the realistic ones, not the insane LeetCode stuff).
