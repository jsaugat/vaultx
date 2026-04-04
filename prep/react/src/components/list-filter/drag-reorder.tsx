import { useState, useRef } from "react";

const INITIAL_ITEMS = [
  "Apple",
  "Banana",
  "Cherry",
  "Dragonfruit",
  "Elderberry",
];

export const DragList = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const dragIndexRef = useRef<number | null>(null); // to track the item being dragged

  const handleDragStart = (dragIndex: number) => {
    dragIndexRef.current = dragIndex;
  };

  const handleDrop = (dropIndex: number) => {
    const from = dragIndexRef.current;
    if (from === null || from === dropIndex) return;

    // remove the item from the dragging index
    const newItems = [...items];
    const [removed] = newItems.splice(from, 1);

    // place it in the new position while reordering
    newItems.splice(dropIndex, 0, removed);

    setItems(newItems);
    dragIndexRef.current = null;
  };

  return (
    <ul>
      {items.map((item, idx) => (
        <li
          key={item}
          onDrop={() => handleDrop(idx)}
          onDragOver={(e) => e.preventDefault()}
          style={{
            listStyle: "none",
            textAlign: "left",
            border: "1px solid gray",
            padding: "4px 6px",
            borderRadius: "8px",
            marginTop: "4px",
          }}
        >
          <button
            draggable
            onDragStart={() => handleDragStart(idx)}
            style={{
              background: "transparent",
              cursor: "grab",
              border: "none",
            }}
          >
            =
          </button>
          {item}
        </li>
      ))}
    </ul>
  );
};
