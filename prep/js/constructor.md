### **Constructor Functions (JS)**

- A **special function** used to create multiple similar objects.
- Called with `new`.
- Automatically sets up:
  1. `this` → the new object being created
  2. Prototype linkage → new object inherits from `FunctionName.prototype`

**Example:**

```js id="0s9ywp"
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const alice = new Person("Alice", 25);
alice.sayHi(); // Hi, I'm Alice
```

**Key points:**

- `alice.__proto__ === Person.prototype` → true
- Methods added to `.prototype` are **shared across instances**
- Avoid defining methods inside the constructor unless you want **separate copies per object**

---

### **Memory tip / Interview sentence**

> “A constructor function is a JS function used with `new` to create objects; it sets `this` to the new object and links it to the function’s prototype for shared methods.”
