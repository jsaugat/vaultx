import { useDebounceValue } from "../hooks/useDebounceValue";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const users = ["Ram", "Rajendra", "Saugat", "Saujan", "Aayush", "Aashish"];
const action = (query) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5 ? true : false;
      if (success) {
        resolve(
          query
            ? users.filter((user) =>
                user.toLowerCase().includes(query.toLowerCase()),
              )
            : users,
        );
      } else {
        reject(new Error("Something went wrong!!"));
      }
    }, Math.random() * 1000);
  });
};

export const DebouncedSearch = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const { debouncedValue } = useDebounceValue(query, 300);
  const requestIdRef = useRef(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const id = ++requestIdRef.current;
        const response = await action(debouncedValue);
        if (requestIdRef.current !== id) return;
        setData(response);
      } catch (error) {
        alert(error);
      }
    };

    fetchUsers();
  }, [debouncedValue]);

  return (
    <div>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />

      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
