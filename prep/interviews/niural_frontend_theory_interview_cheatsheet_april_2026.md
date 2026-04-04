# Niural Frontend Theory Interview Cheatsheet

## 1. JavaScript Fundamentals They Are Likely To Ask

### Event Loop / Single Threaded / Async

JavaScript is single-threaded: one call stack, one thing executes at a time.

Async work is handed off to browser/Web APIs:
- fetch
- setTimeout
- DOM events

When async work finishes:
1. callback/promise goes to queue
2. event loop checks if call stack is empty
3. callback runs

```js
console.log(1)
setTimeout(() => console.log(2), 0)
Promise.resolve().then(() => console.log(3))
console.log(4)
```

Output: `1 4 3 2`

### Microtask vs Macrotask

Microtasks: Promise.then, queueMicrotask, MutationObserver

Macrotasks: setTimeout, setInterval, DOM events

Microtasks always run before the next macrotask.

---

### this (Mini Cheat Table)

| Context | `this` Value |
|---------|--------------|
| Global code (browser, non-strict) | `window` |
| Global code (Node file, non-strict) | `global` |
| Global code (strict mode / ES module) | `undefined` |
| Function call (non-strict) | global object (`window`/`global`) |
| Function call (strict mode) | `undefined` |
| Method call `obj.method()` | `obj` |
| Arrow function | inherits from enclosing scope |
| Constructor function `new Fn()` | new instance object |
| Class method | class instance |

**Rule:** `this` is only relevant **inside functions**. Direct property access does not use `this`.

```js
const user = {
  name: "Sau",
  greet() {
    console.log(this.name)
  }
}
user.greet() // Sau
const fn = user.greet
fn() // undefined (strict mode)
```

Arrow functions do not have their own `this`; they inherit from the outer scope.

```js
const user = {
  name: "Sau",
  greet: () => console.log(this.name)
}
user.greet() // undefined
```

---

### var vs let vs const

| var | let | const |
|-----|-----|-------|
| function scoped | block scoped | block scoped |
| can redeclare | cannot redeclare | cannot redeclare |
| hoisted with undefined | hoisted but TDZ | hoisted but TDZ |

TDZ = Temporal Dead Zone.

---

### call, apply, bind

| Method | Executes Immediately? | Arguments |
|--------|-------------------|-----------|
| call   | yes               | comma separated |
| apply  | yes               | array           |
| bind   | no, returns new fn | comma separated |

Examples:

```js
function greet(city) {
  console.log(this.name, city)
}
const user = { name: "Sau" }

greet.call(user, "Kathmandu") // Sau Kathmandu

greet.apply(user, ["Kathmandu"]) // Sau Kathmandu

const boundGreet = greet.bind(user)
boundGreet("Kathmandu") // Sau Kathmandu
```

**Use cases:**
- `call`/`apply` → invoke now with custom `this`
- `bind` → create reusable function with fixed `this`
- Useful in React class methods to prevent losing `this` when passing as callback.

---

### Closure, Debounce, Throttle, == vs ===, map vs forEach vs filter vs reduce, Prototype / Inheritance, Polyfill

(unchanged, as before)

---

## 2. TypeScript Concepts

(unchanged)

---

## 3. React Core Concepts

(unchanged)

---

## 4. Performance Topic