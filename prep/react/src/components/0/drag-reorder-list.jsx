import { useState } from "react";

export const DragReorderList = () => {
  const [items, setItems] = useState(["item1", "item2", "item3", "item4"]);

  const handleDown = (index) => {
    if (index > items.length - 2) return;

    setItems((prev) => {
      const newList = [...prev];

      [newList[index], newList[index + 1]] = [
        newList[index + 1],
        newList[index],
      ];

      return newList;
    });
  };
  const handleUp = (index) => {
    if (index === 0) return;

    setItems((prev) => {
      const newList = [...prev];

      [newList[index], newList[index - 1]] = [
        newList[index - 1],
        newList[index],
      ];

      return newList;
    });
  };

  return (
    <div>
      {items.map((item, idx) => (
        <div
          key={item + idx}
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {item}
          {idx !== items.length - 1 && (
            <button onClick={() => handleDown(idx)}>Down</button>
          )}
          {idx !== 0 && <button onClick={() => handleUp(idx)}>Up</button>}
        </div>
      ))}
    </div>
  );
};

// Optional one liner
// setItems(prev => prev.map((v, i) => {
//   if (i === index) return prev[index + 1];
//   if (i === index + 1) return prev[index];
//   return v;
// }));

//
