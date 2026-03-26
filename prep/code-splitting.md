# **1. Code Splitting**

- **Idea:** Don’t ship your entire JavaScript bundle at once — split it into smaller chunks so the browser only loads what’s needed.
- **Why:** Faster initial page load, better performance, especially for big apps.

### **Example in React**

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Normal import → everything is bundled in main.js
ReactDOM.render(<App />, document.getElementById("root"));
```

With **code splitting**, you can split a big page component:

```js
import React, { Suspense, lazy } from "react";

const BigComponent = lazy(() => import("./BigComponent"));

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <BigComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

- `BigComponent` is **not included in the main bundle**.
- Only fetched **when it’s needed** (here, when App renders).

---

# **2. Lazy Loading**

- Often used interchangeably with **code splitting**, but subtle difference:
  - Lazy loading = **load resource only when needed**
  - Code splitting = **split code into chunks**

- In React, `React.lazy()` + `Suspense` = **both code splitting + lazy loading**

### Practical analogy

- Imagine your app is a restaurant menu:
  - **Code splitting** → menu is in sections (drinks, desserts, mains).
  - **Lazy loading** → only fetch the dessert menu when the customer asks for it.

---

# **3. When to use it**

- Large components/pages that aren’t immediately visible
- Routes (like React Router) — each route can be lazy-loaded
- Third-party libraries you don’t need upfront

---

# **4. Interview version answer (short)**

> “Code splitting is the practice of splitting your app’s JS into smaller chunks so the browser doesn’t download everything at once. Lazy loading means loading a chunk only when it’s needed, often using `React.lazy()` and `Suspense` in React. This improves performance and reduces initial load time.”
