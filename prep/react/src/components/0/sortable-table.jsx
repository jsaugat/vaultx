import { useMemo } from "react";
import { useState } from "react";

const data = [
  {
    name: "John Doe",
    age: 50,
    salary: 50000,
  },
  {
    name: "Jane Smith",
    age: 25,
    salary: 60000,
  },
  {
    name: "Will Smith",
    age: 23,
    salary: 40000,
  },
  {
    name: "Jane Doe",
    age: 19,
    salary: 100000,
  },
  {
    name: "Black Smith",
    age: 30,
    salary: 200000,
  },
];

export const SortableTable = () => {
  const [filter, setFilter] = useState({
    by: undefined,
    asc: true,
  });

  const sortedData = useMemo(() => {
    [...data].sort((a, b) => {
      if (!filter.by) return 0;

      if (typeof a[filter.by] === "string") {
        return filter.asc
          ? a[filter.by].localeCompare(b[filter.by])
          : b[filter.by].localeCompare(a[filter.by]);
      } else {
        return filter.asc
          ? a[filter.by] - b[filter.by]
          : b[filter.by] - a[filter.by];
      }
    });
  }, [filter]);

  const handleSort = (by) => {
    setFilter((prev) => ({
      by,
      asc: prev.by === by ? !prev.asc : true,
    }));
  };

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: "4px",
      }}
    >
      <div className="header-cell" onClick={() => handleSort("name")}>
        Name {filter.by === "name" ? (filter.asc ? "↑" : "↓") : ""}
      </div>
      <div className="header-cell" onClick={() => handleSort("age")}>
        Age {filter.by === "age" ? (filter.asc ? "↑" : "↓") : ""}
      </div>
      <div className="header-cell" onClick={() => handleSort("salary")}>
        Salary {filter.by === "salary" ? (filter.asc ? "↑" : "↓") : ""}
      </div>
      {sortedData.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "contents",
            }}
          >
            <div className="cell">{item.name}</div>
            <div className="cell">{item.age}</div>
            <div className="cell">{item.salary}</div>
          </div>
        );
      })}
    </section>
  );
};
