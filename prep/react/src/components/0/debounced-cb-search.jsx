import { useEffect } from "react";
import { useState } from "react";

const search = (query) => {
  const users = ["saugat", "john", "jack"];
  const res = new Promise((res, rej) => {
    setTimeout(() => {
      if (query) {
        res(
          users.filter((user) =>
            user.toLowerCase().includes(query.toLowerCase()),
          ),
        );
      } else {
        res(users);
      }
    }, Math.random() * 1000);
  });

  return res;
};

export const DebouncedSearch = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

  const { debouncedSearch } = useDebounceCb(search, 300);

  const handleSearch = async () => {
    try {
      const res = await debouncedSearch();
      setData(res);
    } catch (error) {
      console.error("fetch error!");
    }
  };

  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export const useDebounceCb = (searchAction, delay) => {
  const timerRef = useRef(null);

  const debouncedSearch = (query) => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      return new Promise((resolve, reject) => {
        resolve();
      });
    }, delay);
  };

  return { debouncedSearch };
};
