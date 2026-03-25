A **detailed list of 15 T9-level Niural-style questions**, including **exact problem description, example input/output, and skills practiced/needed**. This will match the level of the T9 keypad you shared.

---

## **15 Detailed Niural-Style Frontend Questions**

---

### **1. T9-style Digit-to-Name Filter**

**Problem:**
Build a numeric keypad (digits 0–9). Input digits → filter a list of users using a letter-to-digit mapping (like T9).

**Example:**

```js
users = ["Alice", "Jack", "Jane"];
query = "52"; // corresponds to "Ja"
Output: ["Jack", "Jane"];
```

**Skills:**

- Object lookup (`letter -> digit`)
- String manipulation (`split`, `map`, `join`)
- Array filtering (`filter`)
- State updates (`useState`)

---

### **2. Search + Clear Input**

**Problem:**
Text input filters a list of items in real time. Add a “Clear” button to reset the input and list.

**Example:**

```
Input: "ap"
List: ["Apple", "Banana", "Grapes"]
Output: ["Apple", "Grapes"]
```

**Skills:**

- Controlled inputs
- Array filtering
- Event handling
- Resetting state

---

### **3. Filter + Multi-Select List**

**Problem:**
Searchable list of items. Each item has a checkbox. Users can select multiple items, including a “Select All” button.

**Example:**

```
Search: "an"
Items: ["Banana", "Mango", "Orange"]
Output: ["Banana", "Mango", "Orange"]
Selected: ["Banana", "Mango"]
```

**Skills:**

- Array map/filter
- Conditional rendering
- State immutability
- Managing multi-selection

---

### **4. Filter + Reorder Combo**

**Problem:**
Filter a list of items by input. Filtered items can be moved up or down in the visible list.

**Example:**

```
Items: ["Task A", "Task B", "Task C"]
Filter: "A" -> ["Task A", "Task C"]
Move "Task C" up
Output: ["Task C", "Task A"]
```

**Skills:**

- Array reordering (`swap`)
- Edge case handling (first/last item)
- Derived state after filtering
- Functional `setState`

---

### **5. Numeric Shortcut Buttons**

**Problem:**
Render buttons 0–9. Clicking a button appends its value to an input field, which filters a list of actions.

**Example:**

```
Buttons clicked: "25"
Actions: ["Jump", "Jog", "Run"]
Mapping: J->5, O->6
Output: ["Jump", "Jog"]
```

**Skills:**

- Map over object keys
- Event handling
- String concatenation and filtering
- Dynamic rendering

---

### **6. Tag Filter**

**Problem:**
A list of tags. Input field filters the tags as you type. Clicking a tag selects it.

**Example:**

```
Input: "re"
Tags: ["React", "Redux", "JavaScript"]
Output: ["React", "Redux"]
Selected: ["React"]
```

**Skills:**

- Array filtering
- Conditional rendering
- Multi-state handling (filtered + selected)

---

### **7. Dynamic Button Mapping**

**Problem:**
Given a config object `{label, value}`, render buttons dynamically. Clicking a button updates a state array.

**Example:**

```
buttons = [{label: "Add", value: 1}, {label: "Remove", value: 2}]
Click "Add" -> state = [1]
```

**Skills:**

- Array mapping to JSX
- Event handling
- State immutability

---

### **8. Limited Input Validation**

**Problem:**
Input field only accepts allowed characters. Invalid characters are ignored.

**Example:**

```
Allowed: letters only
Input: "123abc!@"
State: "abc"
```

**Skills:**

- Controlled inputs
- String filtering
- Event handling

---

### **9. Highlight + Filter**

**Problem:**
Filter a list by input and highlight matching substring in each item.

**Example:**

```
Input: "an"
Items: ["Banana", "Mango"]
Output: "B[an]ana", "M[an]go"
```

**Skills:**

- String splitting and mapping
- JSX fragments
- Conditional rendering
- Array filtering

---

### **10. Clearable + Undoable Input**

**Problem:**
Input field keeps history of entries. Clear input → can undo last entry.

**Example:**

```
History: ["a", "ab", "abc"]
Click Clear -> Input: ""
Click Undo -> Input: "abc"
```

**Skills:**

- Array state for history
- Event handling
- State updates + rollback

---

### **11. Filtered Dropdown Selection**

**Problem:**
Text input filters dropdown options dynamically. Clicking an option selects it.

**Example:**

```
Input: "ja"
Options: ["Jack", "Jane", "John"]
Output: ["Jack", "Jane"]
Select "Jane" -> state = "Jane"
```

**Skills:**

- Map + filter
- State updates
- Conditional rendering

---

### **12. Keyboard Navigation on List**

**Problem:**
Arrow keys move selection in a list. Enter selects item.

**Example:**

```
Arrow down -> highlight next item
Enter -> select highlighted
```

**Skills:**

- Keyboard events
- State updates for focus/selection
- Conditional rendering

---

### **13. Filtered Tag Input**

**Problem:**
Type to filter a list. Press Enter to add a tag from filtered results.

**Example:**

```
Input: "Re"
Items: ["React", "Redux"]
Press Enter -> Tags: ["React"]
```

**Skills:**

- Keyboard events
- Array filtering
- Multi-state handling (input + selected tags)

---

### **14. Number Pad Autocomplete**

**Problem:**
Click digits → autocomplete suggestions from a predefined list of words. Similar to T9 but without letter-to-digit mapping.

**Example:**

```
Digits: "25"
Words: ["Apple", "Banana", "Jump"]
Output: ["Apple", "Jump"]
```

**Skills:**

- Array filter
- String manipulation
- Event handling
- State updates

---

### **15. Dynamic List Transformation**

**Problem:**
List of strings → transform (uppercase/lowercase) → filter → render dynamically.

**Example:**

```
Input: "re"
Items: ["React", "Redux", "JavaScript"]
Transform: lowercase
Output: ["react", "redux"]
```

**Skills:**

- Map, filter
- String manipulation
- Conditional rendering
- State-driven UI
