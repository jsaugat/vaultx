import { useState } from "react";

// Define the shape of a User object for type safety
type User = { id: number; name: string; age: number; salary: number };

const users: User[] = [
  { id: 1, name: "Charlie", age: 32, salary: 75000 },
  { id: 2, name: "Alice", age: 28, salary: 92000 },
  { id: 3, name: "Bob", age: 35, salary: 61000 },
  { id: 4, name: "Diana", age: 24, salary: 88000 },
  { id: 5, name: "Evan", age: 40, salary: 105000 },
];

export const SortableTable = () => {
  const [sortKey, setSortKey] = useState<keyof User | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const handleSort = (key: keyof User) => {
    // If clicking the same column again, toggle the direction
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      // If clicking a new column, set it as the key and default to ascending
      setSortKey(key);
      setSortDir("asc");
    }
  };

  // Create a sorted version of the data for rendering
  const sorted = [...users].sort((a, b) => {
    // 1. If no column is selected, return 0 to maintain original array order
    if (!sortKey) return 0;

    // 2. Determine if we should multiply the result by 1 (asc) or -1 (desc)
    const dir = sortDir === "asc" ? 1 : -1;

    // 3. Handle String comparison (using localeCompare for alphabetical accuracy)
    if (typeof a[sortKey] === "string") {
      return (a[sortKey] as string).localeCompare(b[sortKey] as string) * dir;
    }

    // 4. Handle Numeric comparison (standard subtraction method)
    return ((a[sortKey] as number) - (b[sortKey] as number)) * dir;
  });

  // Simple helper to show the sort arrow next to the active column header
  const arrow = (key: keyof User) =>
    sortKey === key ? (sortDir === "asc" ? " ↓" : " ↑") : "";

  return (
    <table>
      <thead>
        <tr>
          {/* Map through the keys we want to display as headers */}
          {(["name", "age", "salary"] as (keyof User)[]).map((key) => (
            <th
              key={key}
              onClick={() => handleSort(key)}
              style={{ cursor: "pointer", textTransform: "capitalize" }}
            >
              {key}
              {arrow(key)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Render the 'sorted' copy of the array, not the original 'users' */}
        {sorted.map((u) => (
          <tr key={u.id}>
            <td>{u.name}</td>
            <td>{u.age}</td>
            <td>${u.salary.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
