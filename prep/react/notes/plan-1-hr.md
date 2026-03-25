Good. No thinking, no tweaking. Just execute.

---

# SATURDAY — FIRST 6 HOURS (LOCK-IN DRILL)

## RULES

- No Google
- No watching tutorials
- If stuck >10 mins → skip, come back later
- Write code, don’t just think

---

# ⏱️ BLOCK 1 (Hour 1) — Arrays (Speed + Clarity)

## Q1. Remove duplicates

```js
[1,2,2,3,4,4] → [1,2,3,4]
```

## Q2. Flatten (1 level)

```js
[1,[2,3],[4]] → [1,2,3,4]
```

## Q3. Flatten (deep)

```js
[1,[2,[3,[4]]]] → [1,2,3,4]
```

## Q4. Chunk array

```js
([1,2,3,4,5], 2) → [[1,2],[3,4],[5]]
```

## Q5. Group by key (**IMPORTANT**)

```js
[{age:20},{age:20},{age:30}]
→ {20: [...], 30: [...]}
```

👉 If groupBy isn’t clean, you’re in trouble later.

---

# ⏱️ BLOCK 2 (Hour 2) — Objects + State Logic

## Q6. Invert object

```js
{a:1, b:2} → {1:"a", 2:"b"}
```

## Q7. Pick keys

```js
(obj, ["a", "b"]);
```

## Q8. Omit keys

```js
(obj, ["a"]);
```

## Q9. Toggle item (array version)

```js
toggle([1,2,3], 2) → [1,3]
toggle([1,3], 2) → [1,3,2]
```

## Q10. Toggle item (Set version)

(React-style, immutability mindset)

👉 This directly maps to UI problems.

---

# ⏱️ BLOCK 3 (Hour 3) — Strings

## Q11. Frequency map

```js
"aaabbc" → {a:3,b:2,c:1}
```

## Q12. Longest word

```js
"i love javascript" → "javascript"
```

## Q13. Palindrome

```js
"racecar" → true
```

## Q14. Highlight match (**IMPORTANT**)

```js
text: "javascript"
query: "ja"
→ wrap match (split + regex)
```

👉 This connects directly to search UI.

---

# ⏱️ BLOCK 4 (Hour 4) — TypeScript (No Excuses Block)

Write ALL of these from scratch:

## Q15. Typed function

```ts
(a: number, b: number) => number;
```

## Q16. Interface vs Type

Create both for:

```ts
User { id, name }
```

## Q17. Generic function

```ts
function identity<T>(arg: T): T;
```

## Q18. Generic constraint

```ts
T extends { length: number }
```

## Q19. Record usage

```ts
Record<string, number>;
```

## Q20. React props typing

```ts
type Props = {
  items: string[];
};
```

👉 If you hesitate here → repeat this block again.

---

# ⏱️ BLOCK 5 (Hour 5) — React Mini Build

Build this WITHOUT THINKING TOO MUCH:

### Search Filter UI

- input box
- list of names
- filter as user types

Then upgrade:

- case insensitive
- highlight match
- empty state ("No results")

---

# ⏱️ BLOCK 6 (Hour 6) — Add Realism

Upgrade previous UI:

## Add:

- debounce (300ms)
- large list simulation (100+ items)
- clean structure (separate logic)

👉 This is where most juniors collapse.

---

# STRICT CHECKPOINT (After 6 Hours)

If you:

- struggled in groupBy
- couldn’t do generics cleanly
- needed Google for highlight logic

→ You are NOT ready yet

No sugarcoating.

---

# IF YOU STILL HAVE ENERGY (Optional Night Block)

## Mini Challenge:

Build:

- selectable list (checkbox)
- “select all”
- show selected count

---

# TOMORROW (Preview — Don’t Start Yet)

Sunday = **T9 + full interview simulation**

---

# ONE MORE THING (Important)

You’re currently doing:

> “I saw this once, I’ll remember”

That’s wrong.

Correct method:

- Solve once
- Close editor
- Rebuild from scratch after 2–3 hours

If you can’t rebuild → you didn’t learn it

---

If you want next:
I’ll give you **Sunday’s exact T9 + UI simulation drill (with difficulty ramp)**.
