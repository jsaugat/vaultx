import React, { useState } from "react";

const items = [
  {
    question: "question1",
    answer: "answer1",
  },
  {
    question: "question2",
    answer: "answer2",
  },
];

export function Accordion() {
  const [active, setActive] = useState<number | null>(null);
  console.log("activeitem", active);

  const toggle = (id: number) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {items.map((item, idx) => (
        <div key={item.question}>
          <div
            onClick={() => toggle(idx)}
            style={{
              border: "1px solid red",
            }}
          >
            {item.question}
          </div>

          {idx === active && <div>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}
