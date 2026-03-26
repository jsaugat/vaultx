  ## Stale Closure
  
  > “A stale closure happens when a function captures old variables from a previous render or scope, so it keeps using outdated values. In React, this usually happens in useEffect or callbacks when state changes but the closure still references the old snapshot.”

---

### **Optional follow-up / clarification (if asked to explain more)**

* In plain JS: **closures capture variables, not live values**.
* Example: `setTimeout(() => console.log(i), 1000)` inside a `for(var i...)` loop → all callbacks share the same `i` → stale results.
* Fix: use `let` (block-scoped) or proper dependency arrays in React effects.

---
