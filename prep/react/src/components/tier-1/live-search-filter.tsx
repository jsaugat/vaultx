import { useMemo } from "react";
import { useState } from "react";

type User = {
  name: string;
  role: string;
  department: string;
};

const users: User[] = [
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    department: "Engineering",
  },
  { name: "Bob Smith", role: "Backend Developer", department: "Engineering" },
  { name: "Carol Davis", role: "Product Manager", department: "Product" },
  { name: "David Lee", role: "UX Designer", department: "Design" },
  { name: "Eva Chen", role: "HR Specialist", department: "Human Resources" },
  { name: "Frank Wilson", role: "QA Engineer", department: "Engineering" },
  { name: "Grace Kim", role: "Data Analyst", department: "Analytics" },
  { name: "Henry Brown", role: "DevOps Engineer", department: "Engineering" },
  { name: "Ivy Patel", role: "Marketing Manager", department: "Marketing" },
  { name: "Jack Liu", role: "Customer Support", department: "Support" },
];

export const LiveSearchFilter = () => {
  const [query, setQuery] = useState("");

  const result = query
    ? users.filter(({ name, role, department }) =>
        [name, role, department].some((field) =>
          field.toLowerCase().includes(query.toLowerCase().trim()),
        ),
      )
    : users;

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {result.length > 0 ? (
          result.map((u, idx) => (
            <li key={idx}>
              {u.name} is a {u.role} in {u.department}
            </li>
          ))
        ) : (
          <div>No users found.</div>
        )}
      </ul>
    </div>
  );
};
