import { useState } from "react";

const items = [
  { question: "Question 1", answer: "Answer 1" },
  { question: "Question 2", answer: "Answer 2" },
  { question: "Question 3", answer: "Answer 3" },
];

export default function AccordionMultiple() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    // TODO:
    // 1. Check if index already exists in openIndexes
    // 2. If yes → remove it
    // 3. If no → add it

    if (!openIndexes.includes(index)) {
      setOpenIndexes((prev) => [...prev, index]);
    } else {
      setOpenIndexes((prev) => prev.filter((item) => item !== index));
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => handleToggle(index)}>{item.question}</h3>

          {/* conditional rendering */}
          {openIndexes.includes(index) && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
