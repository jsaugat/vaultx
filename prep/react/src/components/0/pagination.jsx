import { useState } from "react";

const allData = Array.from({ length: 64 }, (_, idx) => `Item ${idx + 1}`);

const limit = 10;
const buttonsCount = Math.ceil(allData.length / limit); // 7

export const Pagination = () => {
  const [activePage, setActivePage] = useState(1);
  const [visibleData, setVisibleData] = useState(allData.slice(0, limit));

  const handlePageChange = (page) => {
    setActivePage(page);
    const start = (page - 1) * limit;
    const end = start + limit;
    const thisPageData = allData.slice(start, end);
    setVisibleData(thisPageData);
  };

  return (
    <>
      <ul>
        {visibleData.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <section>
        <button
          onClick={() => handlePageChange(activePage - 1)}
          disabled={activePage === 1}
        >
          Prev
        </button>
        {Array.from({ length: buttonsCount }, (_, idx) => (
          <button onClick={() => handlePageChange(idx + 1)} key={idx}>
            {idx + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(activePage + 1)}
          disabled={activePage === buttonsCount}
        >
          Next
        </button>
      </section>
    </>
  );
};
