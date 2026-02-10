# Priority list - Niural AI

- React Basics
- FizzBuzz type of basic problem solving
- More React
- Typescript Basics (Generics/Type/Interface)
- Problem solving questions
- Example: Dialpad T9 Mapping by creating interfaces and filtering names
- Programming fundamentals like 'Classes'
- JS Fundamentals obviously
- No DSA Questions

### What you learn from FizzBuzz

- Logic precedence
- Specific > Generic
- Same principle shows up in:
  - Routing (`/users/:id` vs `/users/me`)
  - Permission checks
  - Validation rules
  - Pattern matching

# RESPONSE 1

If you trust your above source, then you need to pivot your strategy immediately. "No DSA" doesn't mean "easy"; it means they care about **production-ready engineering** rather than competitive programming.

Niural AI is a fintech/HR-tech company (Payroll, Compliance, Crypto payments). In these companies, a "bug" means someone doesn't get paid or a tax filing is wrong. They will value **Type Safety**, **Data Integrity**, and **Edge-case Handling** over whether you can invert a binary tree.

Here is how to restructure your two-month plan for a **Mid-Level Frontend** role at a company like Niural:

---

### 1. The "T9 Mapping" Logic (The Core Challenge)

The T9 problem (mapping numbers to letters, e.g., `2 -> [a, b, c]`) is the "Frontend DSA." It tests your ability to manipulate data structures.

- **Don't just solve it:** Create a robust `interface` for the mapping.
- **Practice:** Filtering a large list of names based on numeric input.
- **Key Skill:** Can you handle the lookup efficiently without freezing the UI? (Hint: Use `useMemo` or a pre-computed Hash Map).

### 2. TypeScript: Beyond the Basics

For a mid-level role, "knowing" TS isn't enough. You need to show you can prevent bugs.

- **Generics:** Practice writing a reusable `useFetch<T>` hook or a generic `Table<T>` component.
- **Discriminated Unions:** Vital for handling API states (e.g., `{ status: 'loading' } | { status: 'error', error: string }`).
- **Utility Types:** Master `Pick`, `Omit`, `Partial`, and `Record`.

### 3. React Performance & Patterns

They will likely grill you on how React actually works under the hood to ensure you won't write laggy code.

- **State Colocation:** Don't put everything in Global State. Know when to use `useContext` vs. `Zustand/Redux` vs. local state.
- **Custom Hooks:** Move your logic out of the JSX. If your component is 200 lines of logic, you’ll fail.
- **Composition:** Understand how to use `children` props to avoid "Prop Drilling."

---

### 4. Revised 8-Week Roadmap (The "Frontend Pro" Edition)

| Weeks   | Focus Area              | Goal                                                                     |
| ------- | ----------------------- | ------------------------------------------------------------------------ |
| **1-2** | **Advanced JS & Logic** | Master `Array.reduce`, `Map/Set`, and T9-style string manipulation.      |
| **3-4** | **TypeScript Mastery**  | Rewrite old projects into "Strict Mode" TS. Learn Generics & Narrowing.  |
| **5-6** | **React Deep Dive**     | Hooks (useCallback/useMemo), Portals, Error Boundaries, and Profiling.   |
| **7**   | **Machine Coding**      | Build a "Search-as-you-type" component with debouncing and T9 filtering. |
| **8**   | **System Design (FE)**  | How to structure a large SaaS app, handle Auth, and manage API caching.  |

---

### 5. Brutal Truth on "FizzBuzz" Problems

When they say "FizzBuzz type," they are looking for **clean code**, not just the answer.

- **Bad:** One giant function with nested `if/else`.
- **Mid-Level:** A clean, readable function with early returns, proper naming, and TypeScript interfaces.

> **Your Next Move:** Since you were worried about the "T9 Mapping," would you like me to walk you through a **clean, Type-Safe implementation** of a T9 search filter so you can see what "Mid-Level" code looks like?

# RESPONSE 2

Based on my verification of Niural’s current trajectory and engineering culture, your friend gave you a solid blueprint. Niural is an AI-native fintech focusing on global payroll and workforce management. In 2025, they scaled heavily into AI agents and global financial rails (crypto/fiat).

For a **Mid-Level** role there, they aren't looking for someone who can solve abstract puzzles; they want someone who can build **highly reliable, type-safe, and performant financial interfaces.** Here is how you need to level up beyond the basic "FizzBuzz" level to be truly "capable."

---

### 1. The "T9 Mapping" - Mid-Level Execution

A junior solves T9 with a basic object and a loop. A mid-level engineer considers **scalability and reusability.**

**The Problem:** Map digits (2-9) to letters and filter a list of names.
**The Mid-Level Approach:**

- **Encapsulation:** Create a class or a custom hook that handles the mapping logic.
- **Pre-computation:** If the name list is huge, don't filter on every keystroke. Use a `Map` or a `Trie` for or lookups.
- **TypeScript:** Use `as const` for your mapping object to ensure the keys are strictly `2-9`.

```typescript
type T9Key = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

const T9_MAP: Record<T9Key, string[]> = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  // ... rest
} as const;

interface Contact {
  id: string;
  name: string;
}

// Problem solving: Filter contacts based on numeric string "23"
```

### 2. High-Frequency Interview Topics (Beyond the List)

Since Niural deals with payroll and money, you **will** be asked about these three areas:

#### A. Data Integrity & Forms

You will likely be asked to build or explain a complex form (like an employee onboarding form).

- **Challenge your logic:** How do you handle "Dependent Fields"? (e.g., If Country is 'US', show 'SSN' field; if 'UK', show 'National Insurance Number').
- **Validation:** Don't just say "yup" or "zod." Explain _why_ you validate on blur vs. on change.

#### B. Financial Performance (Rendering)

Payroll dashboards have massive tables.

- **The Trap:** If you render 1,000 rows of payroll data and one cell changes, does the whole table re-render?
- **The Solution:** Master **Windowing/Virtualization** (e.g., `react-window`) and `React.memo`. If you don't mention these for a "Mid-Level" role at a fintech, you look like a junior.

#### C. Handling Async & Race Conditions

Niural's AI agents (like EMMA) perform background tasks.

- **Interview Question:** "What happens if a user clicks 'Submit Payroll' twice quickly?"
- **Expectation:** You should talk about **Debouncing**, **Throttling**, or **AbortController** to cancel the first request.

---

### 3. "Classes" and Programming Fundamentals

Your source mentioned "Classes." In modern React, we use hooks, but **Niural’s backend/core logic likely uses OOP (Object-Oriented Programming).**

- **Practice:** Creating a `PayrollCalculator` class with private methods for tax logic.
- **Why?** They want to see if you understand **Encapsulation** and **Single Responsibility**.

---

### 4. Behavioral Logic (The "AI-Native" Factor)

Since they are "Niural AI," they want engineers who think about **AI UX.**

- **Optimistic UI:** When an AI agent starts a task, how do you show progress without making the user wait for a slow LLM response?
- **Error Boundaries:** If the AI generates a malformed JSON for a payroll preview, does it crash the whole dashboard? You need to know how to use **React Error Boundaries.**

---

### Your Immediate "Brutally Honest" Action Plan:

1. **Stop the DSA Grinding:** Do exactly **zero** more LeetCode mediums. It is a waste of your time for this specific company.
2. **The "Mock" Project:** Spend this weekend building a **Searchable Contact List** using TypeScript. Add a "T9" search mode. Make it handle 5,000 names without lagging.
3. **Fix Your Posture:** I’m not kidding. If you are leaning back on a couch, your brain is in "relaxation mode." You cannot simulate the intensity of a technical interview while reclined. Move to a table.

**Would you like me to write a "Mid-Level" version of the T9 search logic in TypeScript for you to study?**
