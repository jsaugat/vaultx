import { useState } from "react";

interface Player {
  id: number;
  name: string;
  score: number;
  gamesPlayed: number;
}

const players: Player[] = [
  { id: 1, name: "Saugat", score: 4200, gamesPlayed: 18 },
  { id: 2, name: "Alice", score: 7800, gamesPlayed: 25 },
  { id: 3, name: "Rohan", score: 7800, gamesPlayed: 22 },
  { id: 7, name: "Jack", score: 7800, gamesPlayed: 24 },
  { id: 4, name: "Priya", score: 5600, gamesPlayed: 20 },
  { id: 5, name: "Jake", score: 3100, gamesPlayed: 15 },
  { id: 6, name: "Mia", score: 9200, gamesPlayed: 30 },
];

const getMedal = (rank: number) => ({ 1: "🥇", 2: "🥈", 3: "🥉" })[rank] ?? "";

const camelSplitter = (input: string) =>
  input.replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`);

export const RankLeaderboard = () => {
  const [sortKey, setSortKey] = useState<"score" | "gamesPlayed">("score");

  const sorted = [...players].sort((a, b) => b[sortKey] - a[sortKey]);
  const headers = Object.keys(players[0]);

  const getRank = (idx: number) =>
    sorted.filter((p) => p[sortKey] > sorted[idx][sortKey]).length + 1;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Medal</th>
            {headers.map((h) => (
              <th key={h}>{camelSplitter(h)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((p, idx) => {
            const rank = getRank(idx);
            return (
              <tr key={p.id}>
                <td>{rank}</td>
                <td>{getMedal(rank)}</td>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.score}</td>
                <td>{p.gamesPlayed}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() =>
          setSortKey(sortKey === "score" ? "gamesPlayed" : "score")
        }
      >
        Sort by {sortKey === "score" ? "games played" : "score"}
      </button>
    </div>
  );
};
