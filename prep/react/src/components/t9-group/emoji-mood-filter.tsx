import { useState } from "react";

interface Task {
  id: number;
  title: string;
  mood: string;
}

const tasks: Task[] = [
  { id: 1, title: "Fix navbar bug", mood: "sad" },
  { id: 2, title: "Ship profile page", mood: "happy" },
  { id: 3, title: "Write tests", mood: "neutral" },
  { id: 4, title: "Deploy release", mood: "happy" },
];

const input = [
  {
    mood: "happy",
    emoji: "😀",
  },
  {
    mood: "neutral",
    emoji: "😐",
  },
  {
    mood: "sad",
    emoji: "😞",
  },
];

export const EmojiMoodFilter = () => {
  const [selections, setSelections] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState<string>("");

  const toggleReaction = (mood: string) => {
    setSelections((prev) => {
      const next = new Set(prev);

      if (next.has(mood)) {
        next.delete(mood);
      } else {
        next.add(mood);
      }

      return next;
    });
  };

  const filtered = tasks.filter((task: Task) => {
    if (selections.size === 0 && search === "") return task;
    return (
      selections.has(task.mood) &&
      task.title.toLowerCase().includes(search.trim().toLowerCase())
    );
  });

  return (
    <main>
      <input
        style={{
          marginBottom: "20px",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {input.map((item) => (
          <button
            key={item.mood}
            onClick={() => toggleReaction(item.mood)}
            style={{
              border: selections.has(item.mood) ? "3px solid yellow" : "none",
            }}
          >
            {item.emoji}
          </button>
        ))}
      </div>
      <ul>
        {filtered.map((task) => (
          <li>{task.title}</li>
        ))}
      </ul>
    </main>
  );
};
