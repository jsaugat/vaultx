### **Type Narrowing – Quick Memory**

**Definition:**
Refining a broad type to a specific type so TS knows what you’re working with.

**How:**

- `typeof` → for primitives (`string`, `number`, `boolean`)
- `instanceof` → for classes/objects
- Property check → `"prop" in obj`
- Custom type guard → `function isX(x): x is X`

**Pattern:**
**Check → Narrow → Use**

**Example:**

```ts
let x: string | number;
if (typeof x === "string") {
  x.toUpperCase(); // ✅ safe
}
```

**Tip:** Say it like:

> “Type narrowing tells TS the exact type by checks so you can safely use type-specific methods.”
