### **Interface vs Type in TypeScript**

1. **Purpose / Use Case**
   - `interface`: primarily for **object shapes** and **class contracts**.
   - `type`: more flexible — can alias **objects, primitives, unions, tuples, intersections**.

2. **Extending / Combining**
   - `interface` can be **extended** using `extends` and also supports **declaration merging** (multiple interfaces with same name combine automatically).
   - `type` can be extended via **intersection (`&`)** but **cannot merge declarations**.

3. **Flexibility**
   - `interface` = only object-like structures.
   - `type` = object + union + tuple + primitive + function types.

4. **Implements / Classes**
   - Both can be implemented by classes: `class X implements I {}`.
   - `interface` is the conventional way for class contracts.

5. **Practical Rule**
   - Use `interface` for objects you expect to **extend or merge**.
   - Use `type` for **complex unions, tuples, or primitives**.

---

### **Sample explanation in 30 seconds**

> “In TypeScript, `interface` is best for object shapes and supports declaration merging, making it useful for extending library types. `type` is more flexible — it can define objects, unions, tuples, or primitives. Both can extend others, but only interfaces automatically merge declarations. For classes, I usually prefer interfaces for contracts, and types for complex unions or tuples.”
