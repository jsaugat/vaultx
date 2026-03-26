/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const allData = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
const action = (page = 1, limit = 10) => {
  return new Promise((resolve, reject) => {
    const start = (page - 1) * limit; //0-9 10-19
    const end = start + limit;
    const result = {
      items: allData.slice(start, end),
      isLast: end >= allData.length,
    };

    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
};

export const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const ref = useRef(null);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [isLast, setIsLast] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async () => {
    if (isFetching || isLast) return;

    setIsFetching(true);
    const response = await action(page, limit);
    setIsFetching(false);
    setData((prev) => [...prev, ...response.items]);
    setIsLast(response.isLast);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchData();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ul>
        {data.map((item, idx) => (
          <li
            key={idx}
            style={{
              height: 200,
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {!isLast && (
        <div
          ref={ref}
          style={{
            color: "red",
          }}
        >
          {page > 1 ? "Loading more..." : "Loading..."}
        </div>
      )}
    </>
  );
};
