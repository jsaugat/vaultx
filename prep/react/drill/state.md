## State/ Reat Thinking (Critical)

### Mutation Trap

```js
const items = ["item12", "item69"];
let next = items; // both has the same address

next.push("X"); // changes values for both in the same address
setItems(next); // doesnt cause rerender due to the same adress being compared

next = [...next, "Y"]; // creates a new reference in the memory
setItems(next); // causes rerender due to address change
```

### Async update bug

```js
setCount(count + 1);
setCount(count + 1);
```

Q) Why might UI show wrong value?

- because in the handler function, if count is 0, it says 0 for entire duration of the function

### Derived vs stored state
