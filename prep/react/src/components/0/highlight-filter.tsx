import { useState } from "react";

const rawUsers = ["Saugat", "Saujan", "JackedSaura", "Jajajaja"];

export const HighlightFilter = () => {
  const [query, setQuery] = useState("");

  const users = rawUsers.filter((user) =>
    user.toLowerCase().includes(query.toLowerCase()),
  );

  const highlight = (text: string, query: string) => {
    if (!query) return text;
    console.log("text: ", text);
    console.log("query: ", query);

    const parts = text.split(new RegExp(`(${query})`, "gi"));
    console.log("parts: ", parts);

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} style={{ color: "red" }}>
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
  };

  return (
    <main>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {users.map((user) => (
          <li key={user}>{highlight(user, query)}</li>
        ))}
      </ul>
    </main>
  );
};

// import { useState } from "react";

// const rawUsers = ["Saugat", "Saujan", "JackedSaura"];

// export const HighlightFilter = () => {
//   const [query, setQuery] = useState("");
//   const users = rawUsers.filter((user) =>
//     user.toLowerCase().includes(query.toLowerCase()),
//   );

//   return (
//     <main>
//       <input type="text" onChange={(e) => setQuery(e.target.value)} />
//       <ul>
//         {users.map((u) => {
//           const arr = u.toLowerCase().split(query.toLowerCase());
//           arr.splice(u.indexOf(query), 0, query);

//           return (
//             <div
//               style={{
//                 border: "1px solid red",
//                 display: "flex",
//               }}
//             >
//               {arr.map((item) => (
//                 <li
//                   style={{
//                     listStyle: "none",
//                     color: item === query ? "red" : "white",
//                   }}
//                 >
//                   {item}
//                 </li>
//               ))}
//             </div>
//           );
//         })}
//       </ul>
//     </main>
//   );
// };

// // [ [s,a,u,g], [j,a,c,k,e,d,s,a,u] ]
