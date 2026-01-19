# The Roadmap

Constraints are clear. Now we optimize.
No hype, no over-planning, just **what will actually move the needle in 2.5 months**.

You have:

- **~75 days**
- **Full-time frontend job (9–7 + commute)**
- Target: **mid-level frontend engineer**
- Company: **Niural AI** (AI + fintech-ish domain → they care about correctness, reasoning, data flow)

You cannot do everything. So we **cut aggressively**.

---

## The Non-Negotiables (do these, or don’t bother applying)

1. **Solid JS fundamentals under pressure**
2. **Clear reasoning in interviews**
3. **ONE strong, relevant project**
4. **Ability to explain trade-offs**

Anything else is noise.

---

## High-Level Plan (simple and realistic)

**Weekdays:** 1.5–2 hours/day
**Weekends:** 4–6 hours total

Split:

- **60% problem solving / JS reasoning**
- **40% project**

---

## Phase 1: Foundation Lock-in (Days 1–20)

Goal: stop bleeding on basic problems.

### Daily (Weekdays – ~90 min)

- **30 min**: one pattern-based problem
  Focus ONLY on:
  - Two pointers
  - Hash maps
  - Sliding window
  - Stack

- **30 min**: rewrite yesterday’s solution **from memory**

- **30 min**: JS fundamentals reading / thinking
  (closures, async, event loop, immutability, reference vs value)

No new frameworks. No distractions.

### Weekend

- Re-solve **5 problems you already did** without looking.
- Write short notes:
  - invariant
  - why pointer moved
  - common bug

This builds **interview reflexes**.

---

## Phase 2: Project Build (Days 21–50)

Now the important part.

### Project Rule

**ONE project. No clones. No tutorials.**

For Niural AI + mid-level frontend, build:

### 👉 **“Data-heavy Financial Dashboard”**

Think:

- Transactions
- Payroll entries
- Invoices
- Filters, derived metrics, summaries

### Must-haves (non-negotiable)

- Complex filtering & sorting
- Derived state (totals, trends)
- Pagination or virtual lists
- Debounce search
- Memoization (`useMemo`, `useCallback`)
- Clear state invariants

UI can be basic. Logic must be clean.

### Schedule

- **Weekdays:**
  - 45 min problems
  - 45 min project

- **Weekends:**
  - 3–4 hours deep project work

---

## Phase 3: Interview Readiness (Days 51–75)

Now sharpen.

### Coding

- Revisit:
  - Two Sum
  - Max Water
  - Sliding window string problems
  - Valid Parentheses

- Time-box to **20 minutes/problem**

### Verbal explanation practice

For EACH solution, practice saying:

- “The invariant is…”
- “I move this pointer because…”
- “Time complexity is…”
- “This fails if…”

### Project polish

- Add README:
  - problem it solves
  - assumptions
  - trade-offs

- Be ready to explain:
  - why state is structured this way
  - what would break if requirements change

---

## What NOT to do (this will kill you)

- ❌ Multiple projects
- ❌ Learning new frameworks
- ❌ Grinding random LeetCode hards
- ❌ UI perfection
- ❌ Tutorial hell

---

## Brutal truth

You don’t need to be “amazing”.
You need to be **clear, calm, and correct**.

Your current grind + this structure is enough to hit **mid-level frontend** if executed consistently.

---

### Next step (important)

If you want, I can:

1. Design the **exact project spec** (features + state model), or
2. Create a **weekly checklist** you follow blindly, or
3. Simulate a **mid-level frontend interview** and tear your answers apart.

Pick **one**.

# Follow up on 'why' dashboard

There are other good project types — but the dashboard is usually the best ROI for your situation.\*\*
Now the honest breakdown so you actually understand _why_, not just what to do.

---

## Why the dashboard is hard to beat (especially for Niural AI)

A **data-heavy dashboard** naturally forces you to demonstrate _mid-level thinking_:

- Derived state (totals, trends, aggregates)
- Complex filtering & sorting (logic, not UI)
- Performance decisions (memoization, pagination)
- Clear invariants (“this value is always computed from X”)
- Predictable state transitions

That’s exactly what companies like Niural AI care about:

- correctness
- reasoning
- calm handling of complexity

Most frontend bugs in real companies come from **bad data flow**, not CSS.

---

## Other project types that are close (ranked)

### 1️⃣ **Form-heavy Workflow App** (Very close second)

Examples:

- Payroll setup flow
- Multi-step onboarding
- Tax form builder

What it proves:

- Validation logic
- Conditional flows
- Edge cases
- State machines (even if implicit)

Why it’s slightly worse than a dashboard:

- Less visible performance reasoning
- Harder to show data aggregation

Still a strong choice if done well.

---

### 2️⃣ **Mini Data Grid / Table Engine**

Think:

- Sortable, filterable table
- Column configs
- Custom renderers
- Row selection
- Bulk actions

What it proves:

- Advanced state management
- Reusability
- Clean abstractions

Why it’s risky:

- Easy to over-engineer
- Needs discipline to stay readable

Great if you keep it simple and explain trade-offs.

---

### 3️⃣ **Search + Results System**

Examples:

- Transaction search
- Log explorer
- Analytics search

What it proves:

- Debouncing
- Caching
- Async state
- Race condition handling

Why it’s weaker alone:

- Narrower scope
- Less variety of logic patterns

Better as a **feature inside** a dashboard.

---

### 4️⃣ **Real-time App (charts, sockets, etc.)**

Looks impressive.
Often backfires.

Why:

- Complexity explodes
- Bugs hide behind async behavior
- Interviewers focus on “why did you do this” instead of your reasoning

Not worth it under a 2.5-month constraint.

---

## Why dashboard wins _for you specifically_

Given:

- Full-time job
- 2.5 months
- Mid-level frontend target
- Interview-heavy company

Dashboard projects:

- Scale nicely with time
- Let you stop at “good enough”
- Are easy to explain verbally
- Map directly to real work at Niural AI

They also **reuse the same thinking patterns** you’re grinding:

- two pointers → pagination
- hash maps → lookup / grouping
- invariants → state correctness

That transfer is gold.

---

## Brutal rule to decide

Ask yourself:

> “Can I explain the invariant of this project?”

If yes → good project
If no → fancy but useless

---

### My recommendation

If you want the **highest probability outcome**:

- Build **one data-heavy dashboard**
- Add **form-like flows inside it**
- Include **search + filtering**

That gives you 3 project types in one, without spreading yourself thin.

If you want, next I can:

- design the **exact project idea tailored to Niural AI**, or
- help you **choose between dashboard vs workflow** based on what you enjoy more.

Pick one and we lock it in.
