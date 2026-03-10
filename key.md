You want actions, not TED-talk energy. Fine. Here’s the **long-term dev cheat sheet**. Mostly keywords, minimal fluff. Treat it like a checklist.

---

# Immediate Goal (Frontend Interviews)

Focus stack:

```
React
Next.js
TypeScript
JS fundamentals
Browser fundamentals
API integration
```

Practice:

```
hooks
state management
form handling
data fetching
error handling
loading states
pagination
```

Must know:

```
useEffect pitfalls
memo / useMemo / useCallback
controlled vs uncontrolled inputs
SSR vs CSR vs SSG
hydration
```

---

# Core JavaScript (always tested)

```
closures
scope
event loop
microtask vs macrotask
promises
async/await
this binding
prototypes
debounce/throttle
```

Practice problems:

```
debounce
deep clone
promise.all
flatten array
rate limiter
```

---

# React Internals

```
render cycle
reconciliation
virtual DOM
key prop
component re-renders
state batching
context vs state manager
```

Avoid mistakes:

```
state in wrong component
unnecessary re-renders
effect dependency bugs
```

---

# Data Fetching

```
REST
HTTP methods
status codes
headers
pagination
caching
retry logic
```

Libraries:

```
TanStack Query
Axios
fetch
```

Patterns:

```
loading state
error state
optimistic updates
stale data
cache invalidation
```

---

# Authentication

```
JWT
access token
refresh token
cookie vs localStorage
auth middleware
token expiration
logout flow
```

Security basics:

```
XSS
CSRF
CORS
httpOnly cookies
sameSite
```

---

# API Design (backend awareness)

```
pagination
filtering
sorting
rate limiting
versioning
idempotency
error format
```

Example:

```
GET /posts?page=1&limit=10
```

---

# Performance

```
bundle size
code splitting
lazy loading
image optimization
memoization
render profiling
```

Tools:

* **Chrome DevTools**
* **Lighthouse**

Check:

```
network waterfall
largest contentful paint
script blocking
```

---

# System Thinking

```
data flow
state ownership
service boundaries
error propagation
retry strategy
fallback UI
```

Ask:

```
who owns this data?
what happens on failure?
what retries?
```

---

# Database Basics

```
indexes
query cost
joins
pagination
N+1 queries
transactions
```

Example DB:

* **PostgreSQL**

---

# DevOps Basics

```
environment variables
build vs runtime config
CI/CD
containerization
```

Tools:

* **Docker**
* **GitHub Actions**

---

# Observability

```
logs
metrics
error monitoring
alerts
```

Tools:

* **Sentry**
* **Grafana**

---

# Practical Projects (career leverage)

Build things that demonstrate:

```
auth flow
API integration
real-time updates
pagination
error recovery
```

Example features:

```
login / signup
JWT refresh flow
dashboard with data fetching
infinite scroll
role-based routes
```

---

# Daily Practice Routine

```
1 hour coding problems
1 hour project work
30 min reading source code
30 min debugging / profiling
```

---

# Red Flags To Fix Early

```
copy paste coding
no understanding of data flow
no debugging skill
no performance awareness
```

---

# Mental Model For Modern Devs

```
system thinking
+
code literacy
+
tool leverage
```

Agents write syntax. Engineers design systems.

That’s the whole game.
