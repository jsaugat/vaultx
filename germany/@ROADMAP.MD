# Saugat's 8-Month Roadmap — Inventory Manager

> Stack: Express → NestJS · PostgreSQL · Prisma · Next.js · Python · Docker · GitHub Actions  
> Goal: Werkstudent SWE role in Germany  
> Rule: One project, built incrementally. Every new technology enters only when the project needs it.

---

## The Project: WarehouseOS

A multi-warehouse inventory management system. Companies use it to track stock across warehouses, manage supplier purchase orders, and report on stockouts and slow-moving products.

### Why this isn't generic

- Stock movement **ledger** — immutable audit trail, not just a counter
- **Atomic** warehouse transfers with PostgreSQL row-level locks
- Purchase order **status machine** — draft → sent → confirmed → received
- **Python analytics layer** — stockout reports, supplier lead times, slow-movers
- 50k+ seeded movement records makes every resume bullet defensible

### Resume framing (build toward this)

> Designed a multi-warehouse inventory system with an immutable stock movement ledger, atomic warehouse transfers using PostgreSQL row-level locks, and a Python analytics layer generating supplier and stockout reports from 50k+ movement records.

---

## Stack Introduction Timeline

| Technology              | Enters  | Reason                                           |
| ----------------------- | ------- | ------------------------------------------------ |
| PostgreSQL + raw SQL    | Month 1 | Foundation — learn it before any ORM             |
| Express + node-postgres | Month 1 | Raw Node first, understand what NestJS abstracts |
| TypeScript              | Month 1 | Use from day one, don't add it later             |
| Docker                  | Month 3 | You have something worth containerizing now      |
| NestJS + Prisma         | Month 3 | Migrate once you understand what they abstract   |
| Next.js (React)         | Month 5 | Backend must be solid before adding frontend     |
| Python + pandas         | Month 5 | DB schema exists, Python queries something real  |
| GitHub Actions          | Month 7 | Polish phase — attach to finished project        |

---

## Phase 1 — Raw Foundations

### Months 1–2 · Express + PostgreSQL + Raw SQL

**What you're building:**  
The core backend API with raw SQL. No ORM. No frontend. Just a working REST API with auth, proper layered architecture, and real SQL queries you wrote yourself.

**Why no ORM yet:**  
You need to feel the pain of writing JOINs by hand. When Prisma generates a query later, you'll know exactly what it's doing. Interviewers probe this — "what does your ORM generate for this query?" — and ORM-first developers can't answer it.

---

### Week 1–2: Project setup + schema design

**Tasks:**

- [ ] Init Node.js project with TypeScript from scratch (`tsc --init`, strict mode on)
- [ ] Set up ESLint + Prettier — enforce code style from day one
- [ ] Install `pg` (node-postgres), `express`, `dotenv`, `zod`
- [ ] Set up PostgreSQL locally (or via Docker one-liner: `docker run -e POSTGRES_PASSWORD=pass -p 5432:5432 postgres`)
- [ ] Design and create the full database schema (see below)
- [ ] Write all table creation SQL in `/db/migrations/001_initial.sql`

**The schema — understand every decision:**

```sql
-- Products: what you stock
CREATE TABLE products (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku         VARCHAR(50) UNIQUE NOT NULL,  -- human-readable code
  name        VARCHAR(255) NOT NULL,
  unit        VARCHAR(20) NOT NULL,         -- 'kg', 'pcs', 'litre'
  reorder_threshold INT NOT NULL DEFAULT 10,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Warehouses: where stock lives
CREATE TABLE warehouses (
  id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name    VARCHAR(100) NOT NULL,
  city    VARCHAR(100) NOT NULL
);

-- Stock levels: stock is a RELATIONSHIP between product and warehouse
-- Never store stock on the product directly — this is the key design decision
CREATE TABLE stock_levels (
  product_id    UUID REFERENCES products(id),
  warehouse_id  UUID REFERENCES warehouses(id),
  quantity      INT NOT NULL DEFAULT 0 CHECK (quantity >= 0),
  PRIMARY KEY (product_id, warehouse_id)
);

-- Stock movements: immutable audit log — every change is a row
-- Current stock = SUM of all movements for a product+warehouse
CREATE TABLE stock_movements (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id    UUID REFERENCES products(id),
  warehouse_id  UUID REFERENCES warehouses(id),
  type          VARCHAR(30) NOT NULL, -- 'receive', 'fulfill', 'transfer_in', 'transfer_out', 'adjustment'
  quantity      INT NOT NULL,         -- positive = in, negative = out
  reference_id  UUID,                 -- links to purchase_order or order
  note          TEXT,
  created_by    UUID REFERENCES users(id),
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Suppliers
CREATE TABLE suppliers (
  id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name    VARCHAR(255) NOT NULL,
  email   VARCHAR(255),
  lead_days INT                        -- average days to deliver
);

-- Purchase orders: restock from supplier
CREATE TABLE purchase_orders (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  supplier_id   UUID REFERENCES suppliers(id),
  warehouse_id  UUID REFERENCES warehouses(id),
  status        VARCHAR(20) NOT NULL DEFAULT 'draft',
  -- status: draft → sent → confirmed → partially_received → received → cancelled
  created_by    UUID REFERENCES users(id),
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  expected_at   DATE
);

CREATE TABLE purchase_order_items (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  purchase_order_id UUID REFERENCES purchase_orders(id),
  product_id        UUID REFERENCES products(id),
  quantity_ordered  INT NOT NULL,
  quantity_received INT NOT NULL DEFAULT 0
);

-- Users
CREATE TABLE users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role          VARCHAR(20) NOT NULL DEFAULT 'staff', -- 'admin', 'manager', 'staff'
  created_at    TIMESTAMPTZ DEFAULT NOW()
);
```

**Why `stock_levels` separate from `products`:**  
One product can exist in multiple warehouses. `products.stock = 50` would mean nothing — 50 total across all warehouses? In warehouse A only? Modeling it as a join table forces clarity and makes warehouse transfers expressible as data operations.

**Why `stock_movements` as an audit log:**  
Your current stock is always `SELECT SUM(quantity) FROM stock_movements WHERE product_id = $1 AND warehouse_id = $2`. You never lose history. You can reconstruct stock at any point in time. This is the pattern interviewers recognise from production systems.

---

### Week 3–4: Auth + layered architecture

**Tasks:**

- [ ] Implement the 4-layer architecture — enforce this strictly, never break the layers:
  ```
  routes/        → HTTP routing only, no logic
  controllers/   → parse req, call service, return res
  services/      → all business logic lives here
  repositories/  → all SQL lives here, nothing else
  ```
- [ ] Implement JWT auth from scratch (no Passport yet)
  - `POST /auth/register` — hash password with bcrypt, return JWT
  - `POST /auth/login` — verify password, return JWT
  - Auth middleware that validates JWT on protected routes
- [ ] Role-based access: admin, manager, staff
- [ ] Input validation with Zod on every route

**Key architecture rule:**  
SQL never appears in a controller or service. Controllers never import `pg`. If you catch yourself writing a query outside a repository file, stop and move it.

```typescript
// WRONG — SQL in controller
app.get("/products", async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
});

// RIGHT — controller calls service, service calls repository
// routes/products.ts → controllers/products.controller.ts
//   → services/products.service.ts → repositories/products.repository.ts
```

---

### Week 5–6: Core inventory operations

**Tasks:**

- [ ] Products CRUD with search and pagination
- [ ] Stock level endpoints — current stock per product per warehouse
- [ ] **Stock receive** — goods arriving at warehouse
  - Write to `stock_movements` (type: 'receive')
  - Update `stock_levels` quantity
  - Both in a single transaction
- [ ] **Warehouse transfer** — move stock between warehouses
  - This is the concurrency problem: lock both rows, debit one, credit other

  ```sql
  BEGIN;
    -- Lock both stock rows to prevent race conditions
    SELECT quantity FROM stock_levels
    WHERE product_id = $1 AND warehouse_id IN ($2, $3)
    ORDER BY warehouse_id  -- consistent order prevents deadlocks
    FOR UPDATE;

    -- Check source has enough stock
    -- Debit source warehouse
    UPDATE stock_levels SET quantity = quantity - $4
    WHERE product_id = $1 AND warehouse_id = $2;

    -- Credit destination warehouse
    UPDATE stock_levels SET quantity = quantity + $4
    WHERE product_id = $1 AND warehouse_id = $3;

    -- Write two movement records
    INSERT INTO stock_movements (...) VALUES (...); -- transfer_out
    INSERT INTO stock_movements (...) VALUES (...); -- transfer_in
  COMMIT;
  ```

- [ ] **Manual adjustment** — correct stock discrepancies with a note

**SQL you must be able to write by hand:**

```sql
-- Current stock across all warehouses for a product
SELECT w.name, sl.quantity
FROM stock_levels sl
JOIN warehouses w ON w.id = sl.warehouse_id
WHERE sl.product_id = $1;

-- Products below reorder threshold
SELECT p.sku, p.name, p.reorder_threshold,
       COALESCE(SUM(sl.quantity), 0) AS total_stock
FROM products p
LEFT JOIN stock_levels sl ON sl.product_id = p.id
GROUP BY p.id, p.sku, p.name, p.reorder_threshold
HAVING COALESCE(SUM(sl.quantity), 0) < p.reorder_threshold;

-- Stock movement history for a product
SELECT sm.type, sm.quantity, sm.created_at,
       u.email AS created_by, w.name AS warehouse
FROM stock_movements sm
JOIN users u ON u.id = sm.created_by
JOIN warehouses w ON w.id = sm.warehouse_id
WHERE sm.product_id = $1
ORDER BY sm.created_at DESC
LIMIT 50;
```

---

### Week 7–8: Purchase orders

**Tasks:**

- [ ] Supplier CRUD
- [ ] Create purchase order (draft status)
- [ ] Add line items to PO
- [ ] Status transitions — enforce valid transitions only:
  ```
  draft → sent → confirmed → partially_received / received
  any state → cancelled (except received)
  ```
- [ ] Receive goods against a PO:
  - Update `purchase_order_items.quantity_received`
  - Write stock movement (type: 'receive', reference_id = PO id)
  - Update stock level
  - Auto-update PO status: if all items received → 'received', else → 'partially_received'
  - All in one transaction

### Phase 1 Gate — Do not move on until:

- [ ] Full REST API runs locally, all endpoints tested with Postman or Bruno
- [ ] Warehouse transfer works correctly under concurrent requests (test with two simultaneous requests)
- [ ] You can write the top-5 SQL queries from this phase from memory, without looking them up
- [ ] Layered architecture is clean — zero SQL outside repository files
- [ ] JWT auth protects all routes, role checks on admin-only endpoints

---

## Phase 2 — NestJS + Prisma + Docker

### Months 3–4

**What you're building:**  
Migrate the same project to NestJS with Prisma. Same features, same database schema, better structure. Then containerize everything.

**Why rebuild instead of refactor:**  
You'll understand NestJS faster by rebuilding something you already know than by learning a new framework on a new domain simultaneously. The domain is solved — all cognitive load goes to the framework.

---

### Week 9–10: NestJS migration

**Tasks:**

- [ ] `nest new warehouse-os` — start fresh NestJS project
- [ ] Recreate module structure:
  ```
  src/
    auth/           → AuthModule, AuthGuard, JwtStrategy
    products/       → ProductsModule, controller, service, repository
    warehouses/     → WarehousesModule
    stock/          → StockModule (movements, transfers, adjustments)
    purchase-orders/→ PurchaseOrdersModule
    users/          → UsersModule
  ```
- [ ] Replace Express middleware with NestJS Guards (auth)
- [ ] Replace Zod with class-validator + class-transformer DTOs
- [ ] Replace manual JWT with `@nestjs/jwt` + Passport strategy
- [ ] Dependency injection for all services and repositories

**Key NestJS concepts to understand, not just use:**

_Guards_ replace your Express auth middleware:

```typescript
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

// Usage — cleaner than middleware
@Get('products')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('manager', 'admin')
findAll() { ... }
```

_DTOs_ replace Zod schemas:

```typescript
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Matches(/^[A-Z0-9-]+$/)
  sku: string;

  @IsInt()
  @Min(0)
  reorderThreshold: number;
}
```

_Why DI matters:_ In Express you probably imported your repository directly. In NestJS, the repository is injected — meaning you can swap it for a mock in tests without changing the service. That's the practical value, not just a pattern for pattern's sake.

---

### Week 11–12: Prisma + Docker

**Tasks:**

- [ ] Install Prisma, run `npx prisma init`
- [ ] Write `schema.prisma` matching your existing PostgreSQL schema
- [ ] `npx prisma migrate dev` — generate and apply migrations
- [ ] Create `PrismaService` and inject it into repositories
- [ ] Replace all raw SQL with Prisma queries — except the complex ones:
  - Warehouse transfer: keep `$queryRaw` with the `FOR UPDATE` lock
  - Below-reorder-threshold report: keep `$queryRaw` — Prisma can't express `HAVING` cleanly
  - Stock movement history with joins: Prisma `include` handles this well
- [ ] Add Prisma `$queryRaw` escape hatch for the 2–3 queries that need it

**Docker:**

- [ ] Write `Dockerfile` for NestJS app (multi-stage):

  ```dockerfile
  FROM node:20-alpine AS builder
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci
  COPY . .
  RUN npm run build

  FROM node:20-alpine AS runner
  WORKDIR /app
  COPY --from=builder /app/dist ./dist
  COPY --from=builder /app/node_modules ./node_modules
  COPY --from=builder /app/package.json .
  CMD ["node", "dist/main"]
  ```

- [ ] Write `docker-compose.yml`:

  ```yaml
  services:
    api:
      build: .
      ports: ["3000:3000"]
      environment:
        DATABASE_URL: postgresql://postgres:pass@db:5432/warehouseos
        JWT_SECRET: ${JWT_SECRET}
      depends_on: [db]

    db:
      image: postgres:16-alpine
      environment:
        POSTGRES_DB: warehouseos
        POSTGRES_PASSWORD: pass
      volumes:
        - pgdata:/var/lib/postgresql/data

  volumes:
    pgdata:
  ```

- [ ] `docker-compose up` runs the full app — test every endpoint again

### Phase 2 Gate — Do not move on until:

- [ ] `docker-compose up` starts everything from scratch
- [ ] All Phase 1 features work identically in NestJS version
- [ ] You can explain what Prisma generates vs what you wrote in raw SQL
- [ ] You can explain dependency injection to someone in plain English
- [ ] Warehouse transfer still uses `$queryRaw` with `FOR UPDATE` — don't let Prisma abstract away the lock

---

## Phase 3 — Next.js Frontend + Python Data Layer

### Months 5–6

**What you're building:**  
A React frontend for the warehouse staff, and a Python reporting script that generates analytics from the same database. Two parallel tracks — you can interleave them.

---

### Week 13–15: Next.js frontend

**Tasks:**

- [ ] `npx create-next-app@latest` — TypeScript, App Router, Tailwind
- [ ] Auth flow: login page → store JWT in httpOnly cookie → protected layout
- [ ] Pages to build:
  - `/dashboard` — total stock value, low-stock alerts count, recent movements
  - `/products` — list, search, filter by below-threshold
  - `/products/[id]` — product detail with movement history
  - `/warehouses` — stock levels per warehouse
  - `/stock/transfer` — form to move stock between warehouses
  - `/purchase-orders` — list and create POs
  - `/purchase-orders/[id]` — PO detail, receive goods
- [ ] Use React Query (`@tanstack/react-query`) for all API calls — not raw fetch in useEffect
- [ ] Functional UI — Tailwind utility classes, no custom CSS framework. It doesn't need to be beautiful. It needs to work.

**Do not spend more than 20% of this phase on UI polish.** The frontend proves the API works end-to-end. It is not the thing interviewers are evaluating you on.

---

### Week 14–16: Python data layer

**This is introduced in parallel with the frontend — you don't need to finish the frontend first.**

**Tasks:**

- [ ] Set up Python environment: `python -m venv venv`, install `psycopg2-binary`, `pandas`, `python-dotenv`
- [ ] Connect to the same PostgreSQL database used by the NestJS API
- [ ] Write the data seeder first:
  ```python
  # seed.py — generates realistic movement history
  # Target: 50,000+ rows in stock_movements
  # 200 products × 3 warehouses × ~365 days of movements
  # Randomised: receives, fulfillments, transfers, adjustments
  # This is what makes "50k+ movement records" on your resume true
  ```
- [ ] Write four analytics scripts in `analytics/`:

**Script 1: `stockout_report.py`**

```python
# Products that hit zero stock in the last 30 days
# How many days were they out of stock?
# Which warehouse had the worst stockouts?
# Output: JSON or CSV
```

**Script 2: `supplier_report.py`**

```python
# For each supplier: average actual lead time vs promised lead_days
# Which supplier is most reliable?
# Total value ordered per supplier last quarter
```

**Script 3: `slow_movers.py`**

```python
# Products with < N movements in last 60 days
# Estimated months of stock remaining at current consumption rate
# Flag as 'dead stock' if no movement in 90 days
```

**Script 4: `weekly_summary.py`**

```python
# Runs every Monday (scheduled)
# Combines stockout + slow-mover + low-threshold alerts
# Outputs a single JSON file consumed by the Next.js dashboard
# Add this container to docker-compose
```

- [ ] Add Python service to `docker-compose.yml`:
  ```yaml
  analytics:
    build: ./analytics
    environment:
      DATABASE_URL: ${DATABASE_URL}
    depends_on: [db]
    # Runs weekly_summary.py on a schedule
  ```

**What pandas actually does for you here:**

```python
import pandas as pd
import psycopg2

conn = psycopg2.connect(os.getenv('DATABASE_URL'))

# Load movement history into a DataFrame
df = pd.read_sql("""
  SELECT sm.product_id, p.name, sm.quantity, sm.type, sm.created_at
  FROM stock_movements sm
  JOIN products p ON p.id = sm.product_id
  WHERE sm.created_at > NOW() - INTERVAL '30 days'
""", conn)

# Group and aggregate — this is the pandas value
stockout_days = (
  df[df['quantity'] < 0]
  .groupby('product_id')
  .agg(total_out=('quantity', 'sum'), movement_count=('id', 'count'))
  .reset_index()
)
```

### Phase 3 Gate — Do not move on until:

- [ ] Full stack runs end-to-end: Next.js → NestJS → PostgreSQL
- [ ] Python seeder has run — `stock_movements` has 50,000+ rows
- [ ] All four analytics scripts produce real output against seeded data
- [ ] Python container in docker-compose — `docker-compose up` starts everything including analytics
- [ ] `docker-compose up` is the only command needed to run the entire project

---

## Phase 4 — Polish + CI/CD + Portfolio Ready

### Month 7

**What you're building:**  
Nothing new. Hardening what exists into something you'd show an interviewer without hesitation.

---

### Week 17–18: Tests

**Tasks:**

- [ ] Unit tests for service layer (Jest) — focus on business logic:
  - Stock transfer service: test that it rejects transfers exceeding available stock
  - PO status machine: test that invalid transitions throw errors
  - Stock level calculation: test that movements sum correctly
- [ ] Integration tests for key endpoints (Supertest + test database):
  - `POST /auth/login` — valid and invalid credentials
  - `POST /stock/transfer` — successful transfer, insufficient stock rejection
  - `POST /purchase-orders/:id/receive` — partial and full receive
- [ ] Do not aim for 100% coverage — aim for coverage on the business logic that can go wrong

---

### Week 19: CI/CD + final polish

**Tasks:**

- [ ] GitHub Actions workflow `.github/workflows/ci.yml`:
  ```yaml
  name: CI
  on: [push, pull_request]
  jobs:
    test:
      runs-on: ubuntu-latest
      services:
        postgres:
          image: postgres:16
          env:
            POSTGRES_DB: warehouseos_test
            POSTGRES_PASSWORD: pass
          ports: ["5432:5432"]
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with: { node-version: "20" }
        - run: npm ci
        - run: npm run lint
        - run: npm test
  ```
- [ ] Build passes badge on README
- [ ] Clean `README.md`:
  - What WarehouseOS does (2 sentences)
  - Architecture diagram (simple ASCII or image)
  - How to run: `docker-compose up` — nothing else
  - Key technical decisions (ledger pattern, transaction locks, Python layer)
  - Link to Swagger docs (`/api` endpoint, NestJS generates this free)
- [ ] Swagger enabled via `@nestjs/swagger` decorators on all endpoints
- [ ] No secrets in repo — `.env.example` with all required keys documented
- [ ] Commit history is clean — squash "wip" commits, meaningful messages

### Phase 4 Gate — Do not move on until:

- [ ] CI passes on GitHub on every push
- [ ] `docker-compose up` starts the full stack from a fresh clone — test this on a different machine or directory
- [ ] README: a stranger can understand what the project is and run it in under 5 minutes
- [ ] You can walk through the entire codebase in 15 minutes without hesitation — if you can't, you built something you don't understand

---

## Phase 5 — Interview Prep + Active Applications

### Months 8–9

**Mode shift: stop building, start drilling.**  
New learning only if a specific gap surfaces in a real interview.

---

### Technical interview drills

**SQL — write these cold, no looking up:**

```sql
-- Top 5 products by stock movement volume last 30 days
-- Products below reorder threshold across all warehouses
-- Supplier with highest average lead time deviation
-- Monthly stock received vs fulfilled per warehouse
-- Products with zero movement in 90 days (dead stock)
```

**NestJS internals — be able to explain:**

- What dependency injection actually does and why it makes testing easier
- The request lifecycle: middleware → guard → interceptor → pipe → controller → service
- Why Guards replace middleware for auth (not just "NestJS uses Guards")
- What a Pipe does vs what a Guard does

**System design basics (Werkstudent level — don't over-prepare):**

- What happens when a user submits a stock transfer form (trace the full request)
- How would you add real-time low-stock notifications (websockets / polling tradeoff)
- Why is the stock movement ledger better than updating a counter directly

**REST fundamentals:**

- Idempotency: why PUT should be idempotent, why POST isn't
- Status codes: 200 vs 201, 400 vs 422, 401 vs 403
- Pagination: offset vs cursor-based, when each matters

**DSA — LeetCode easy/medium only, ~20 problems total:**

- Arrays + hashmaps (Two Sum, Group Anagrams)
- String manipulation
- Basic sorting problems
- Do not go deep on trees, graphs, or DP — overkill for Werkstudent level

---

### Germany-specific prep

**Applications:**

- [ ] CV in German format: 1 page, professional photo, no "objective statement", clean layout
- [ ] XING profile — German recruiters use this more than LinkedIn
- [ ] LinkedIn profile — international companies use this
- [ ] Target 20–30 companies — mix of startups (Berlin, Hamburg) and Mittelstand (Stuttgart, Munich, Frankfurt)
- [ ] Apply to 5 per week minimum once you start — don't batch and wait

**Visa + admin:**

- [ ] APS certificate — apply as early as possible, takes time
- [ ] Understand Werkstudent visa conditions: max 120 full days or 240 half days per year during semester
- [ ] uni-assist process for your target universities — check Anabin for your Nepali degree recognition status
- [ ] Blocked account (Sperrkonto) — required for student visa, ~11,208 EUR as of 2024

**Behavioural prep (interviews are mostly in English):**

- Prepare answers for: "Tell me about a technical challenge you faced" → use the warehouse transfer concurrency problem
- "Why did you choose this architecture?" → ledger pattern over counter, DI in NestJS
- "What would you do differently?" → genuine answer, shows reflection

---

## Quick Reference

### Technologies and when they enter

| Month | New tech introduced                      | Why then                                            |
| ----- | ---------------------------------------- | --------------------------------------------------- |
| 1     | PostgreSQL, raw SQL, Express, TypeScript | Foundation — understand before abstracting          |
| 3     | Docker, NestJS, Prisma                   | Have something worth containerizing and migrating   |
| 5     | Next.js, Python + pandas                 | Backend solid, DB schema exists for Python to query |
| 7     | GitHub Actions, Jest, Supertest          | Polish phase — tests and CI on finished code        |

### The 4 resume bullets you're building toward

1. Immutable stock movement ledger — full audit trail, stock reconstructable at any point in time
2. Atomic warehouse transfers using PostgreSQL row-level locks — race condition prevention
3. Purchase order status machine with NestJS guards and class-validator DTOs
4. Python analytics pipeline across 50k+ movement records — stockout frequency, supplier lead times, dead stock detection

### Phase gates summary

| Phase | Gate condition                                                              |
| ----- | --------------------------------------------------------------------------- |
| 1 → 2 | Working API, raw SQL transactions, layered architecture clean               |
| 2 → 3 | docker-compose up works, NestJS feature-parity with Express version         |
| 3 → 4 | Full stack end-to-end, 50k+ seeded rows, Python scripts produce real output |
| 4 → 5 | CI passes, README clean, can walk codebase in 15 mins without hesitation    |

### If you get stuck

- Stuck on a SQL query → write it in plain English first, then translate
- Stuck on NestJS concept → go back to the Express equivalent, then see what NestJS is replacing
- Stuck on Python → pandas docs + your own PostgreSQL schema is all you need
- Tempted to add a new feature → ask "does this teach a skill on the roadmap?" If no, skip it
- Tempted to switch projects → re-read the resume bullets above

---

_Generated for Saugat · Target: Werkstudent SWE in Germany · Stack locked: WarehouseOS_
