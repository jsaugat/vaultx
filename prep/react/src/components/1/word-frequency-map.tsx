import { useState } from "react";

export const WordFrequencyMap = () => {
  const [paragraph, setParagraph] = useState("");

  // Convert to array
  const words = paragraph.split(" ").map((word) => word.toLowerCase());

  // Create a map
  const frequency = words.reduce(
    (acc: Record<string, number>, word: string) => {
      acc[word] = (acc[word] || 0) + 1;

      return acc;
    },
    {},
  );

  return (
    <div>
      <textarea
        value={paragraph}
        onChange={(e) => setParagraph(e.target.value)}
      />

      {/* Make the map iterable */}
      {Object.entries(frequency).map(([word, count]) => (
        <div key={word}>
          {word} {count}
        </div>
      ))}
    </div>
  );
};
