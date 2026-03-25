import { useState } from "react";

const items = [
  { question: "Question 1", answer: "Answer 1" },
  { question: "Question 2", answer: "Answer 2" },
  { question: "Question 3", answer: "Answer 3" },
];

export default function AccordionSingle() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    // TODO: implement toggle logic
    // if same index clicked → close it
    // otherwise → open the clicked one

    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => handleToggle(index)}>{item.question}</h3>

          {/* conditional rendering */}
          {openIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
