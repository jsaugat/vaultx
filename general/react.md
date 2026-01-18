# REACT

- Act of manipulating **DOM** causes re-render (eg. appendChild)
- Imperative Programming: You describe HOW to accomplish a solution
- Declarative Programming: You describe WHAT you want it to accomplish. Declarative Programming is always built on top of the Imperative.

Here’s a **handpicked list of 15–20 problems** that will **train your algorithmic thinking** **and transfer directly to React/JS debugging and code clarity**. I’m ranking them roughly from easy → medium → hard so you can build momentum.

---

## **1. Two-Pointer / Sliding Window**

1. **Two Sum (sorted)** → pattern: two pointers, invariants.
2. **Container With Most Water** → two pointers, limiting factor.
3. **Max Consecutive Ones** → sliding window, counting sequences.
4. **Longest Substring Without Repeating Characters** → sliding window + set/map.
5. **Minimum Size Subarray Sum** → sliding window, early exit logic.

---

## **2. Hash / Frequency Map**

6. **Two Sum (unsorted)** → use hash map, lookup invariant.
7. **Valid Anagram** → frequency map, string analysis.
8. **Group Anagrams** → map + array patterns.
9. **Subarray Sum Equals K** → map for prefix sums.
10. **Top K Frequent Elements** → map + sorting / heap.

---

## **3. Stack**

11. **Valid Parentheses** → stack + invariant.
12. **Next Greater Element** → monotonic stack.
13. **Largest Rectangle in Histogram** → advanced stack pattern, logic for boundaries.

---

## **4. Math / Invariants**

14. **FizzBuzz** → modular arithmetic, simple invariant practice.
15. **Happy Number** → cycle detection, invariants.
16. **Rotate Array (in-place)** → array manipulation + modulo.

---

## **5. Misc / Logic & Pattern Recognition**

17. **Palindrome Checker** → two pointers + string cleanup.
18. **Merge Intervals** → sorting + linear pass, reasoning about overlapping ranges.
19. **Meeting Rooms / Overlapping Intervals** → edge cases & pointer movement.
20. **Stock Buy/Sell (max profit)** → one pass, invariants with min/max tracking.

---

### Why these are React-relevant

- **State tracing & updates:** Sliding window + prefix sums → map to state changes over time.
- **Component data flow:** Hashmap problems → understand “lookup” vs “iteration”, like props & derived state.
- **UI edge cases:** Stack / parenthesis / intervals → nested components, conditional rendering.
- **Debugging mental model:** Math + invariants → mental simulation of arrays & state before writing code.

---

### Brutal tip

- Don’t just solve once. **Redo problems after 2–3 days without looking**. That’s when patterns stick.
- After you “own” two-pointer, sliding window, hash, and stack patterns, React debugging and reasoning becomes **instantly faster**.

---

If you want, I can **pick 5 problems from this list and write “skeleton versions”** for you to practice **filling in the logic yourself**. That’s the fastest way to lock the patterns.

Do you want me to do that?
