Here's a solid interview explanation, short and clear:

---

### One sentence definition first:

> "The event loop is what allows JavaScript to handle asynchronous tasks despite being single-threaded."

---

### Then explain with 3 components:

**1. Call Stack**
— where your code runs, one thing at a time

**2. Web APIs / Task Queue**
— when you call `setTimeout`, `fetch`, etc., the browser handles it in the background and puts the callback in a queue when it's ready

**3. Event Loop**
— constantly checks: _"is the call stack empty? if yes, push the next callback from the queue"_

---

### Then give this example:

```javascript
console.log("A");
setTimeout(() => console.log("B"), 0); // 0ms delay!
console.log("C");

// prints: A, C, B
```

> "Even with 0ms delay, `B` prints last — because `setTimeout` goes through the task queue, and the event loop won't push it to the call stack until all synchronous code finishes."

---

### Closing line:

> "So the event loop is basically JavaScript's way of handling async work without blocking — it keeps checking the queue and processing callbacks only when the stack is free."

---

That structure — **definition → 3 components → example → closing line** — will come across very confident in an interview.
