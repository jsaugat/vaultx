Memorize these. Nothing else matters for your level.

---

# Core patterns

### 1. Digits

```js
/\d+/g;
```

→ extract numbers

---

### 2. Alphabets / words

```js
/[a-zA-Z]+/g;
```

or

```js
/\w+/g;
```

→ words (includes numbers + `_`)

---

### 3. Alphanumeric only

```js
/[a-zA-Z0-9]+/g;
```

---

### 4. Remove non-alphanumeric

```js
/[^a-zA-Z0-9]/g;
```

---

### 5. Spaces

```js
/\s+/g;
```

---

### 6. Non-spaces

```js
/\S+/g;
```

---

### 7. Starts with

```js
/^abc/;
```

---

### 8. Ends with

```js
/abc$/;
```

---

### 9. Contains (basic check)

```js
/abc/.test(str);
```

---

### 10. Optional character

```js
/colou?r/;
```

---

### 11. Repeat

```js
/a+/     // 1 or more
/a*/     // 0 or more
```

---

### 12. Exact length

```js
/^\d{4}$/; // exactly 4 digits
```

---

### 13. Range length

```js
/^\d{3,6}$/;
```

---

### 14. OR condition

```js
/cat|dog/;
```

---

### 15. Character set

```js
/[abc]/;
```

---

# High-frequency interview use cases

### Extract numbers

```js
str.match(/\d+/g);
```

---

### Remove special characters

```js
str.replace(/[^a-zA-Z0-9]/g, "");
```

---

### Check only digits

```js
/^\d+$/.test(str);
```

---

### Split by multiple separators

```js
str.split(/[,\s]+/);
```

---

### Highlight search (you already saw this)

```js
text.split(new RegExp(`(${query})`, "gi"));
```

---

### Basic email (good enough for interviews)

```js
/\S+@\S+\.\S+/;
```

---

# What to ignore (waste of time for you)

- Lookaheads/lookbehinds
- Complex email regex
- Unicode edge cases
- Advanced grouping tricks

---

# Bottom line

If you can’t instantly use these, you’re underprepared:

- `\d`, `\w`, `\s`
- `[]`, `[^]`
- `+`, `*`, `?`
- `^`, `$`
- `.test()`, `.match()`, `.replace()`

---

If you want to actually get interview-ready, next step is not more syntax.

Ask:
→ “give me regex problems I’ll actually be asked”
