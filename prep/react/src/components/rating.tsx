import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(-1);

  console.log(hovered);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        {Array.from({ length: 5 }, (v: any, idx) => (
          <Star
            className={`star ${idx <= hovered ? "hovered" : ""} ${rating && (idx < rating ? "active" : "")}`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(-1)}
            onClick={() => setRating(idx + 1)}
          />
        ))}
      </div>
      <div style={{ marginTop: "4px" }}>Rating: {rating}</div>
      <button style={{ marginTop: "4px" }} onClick={() => setRating(0)}>
        review hatau
      </button>
    </div>
  );
};
