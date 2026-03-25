import { useState } from "react";

export const ChipInput = () => {
  const [chips, setChips] = useState(new Set());
  const [value, setValue] = useState("");

  return (
    <div>
      {/* Chips */}
      <div>
        {[...chips].map((item, idx) => (
          <div
            style={{
              border: "1px solid gray",
              padding: "10px 20px",
            }}
            key={idx}
          >
            {item}
            <button
              onClick={() => {
                setChips((prev) => {
                  const newSet = new Set(prev);

                  newSet.delete(item);

                  return newSet;
                });
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (!chips.has(value)) {
              setChips((prev) => {
                const newSet = new Set(prev);

                newSet.add(value);

                return newSet;
              });

              setValue("");
            } else {
              alert("dont push the same shit");
            }
          }
        }}
      />

      <button
        onClick={() => {
          setChips((prev) => {
            const newSet = new Set(prev);
            newSet.clear();

            return newSet;
          });
        }}
      >
        nuke
      </button>
    </div>
  );
};

// [React] [JavaScript] [TypeScript]  ✕
// Array state
// [x,y, z]
