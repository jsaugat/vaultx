import { useState } from "react";

const players = ["Messi", "Ronaldo", "Neymar", "Yamal"];

export const SelectableList = () => {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  console.log(selectedIndexes, "selectedIndexes");

  const handleToggle = (index) => {
    if (selectedIndexes.includes(index)) {
      // remove check
      setSelectedIndexes((prev) => prev.filter((item) => item !== index));
    } else {
      setSelectedIndexes((prev) => [...prev, index]);
    }
  };

  const handleSelectAll = () => {
    if (selectedIndexes.length === players.length) {
      // unselect all
      setSelectedIndexes([]);
    } else {
      // select all
      setSelectedIndexes(players.map((_, index) => index));
    }
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={selectedIndexes.length === players.length}
          onChange={handleSelectAll}
        />
        <label>Select All</label>
      </div>
      {players.map((player, index) => (
        <div style={{}}>
          <input
            id={player}
            checked={selectedIndexes.includes(index)}
            onChange={() => handleToggle(index)}
            type="checkbox"
          />{" "}
          <label htmlFor="player">{player}</label>
        </div>
      ))}
    </div>
  );
};

const apps = ["Instagram", "Facebook", "Pinterest"];
export const SelectableListSolo = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  console.log("selected single item::", selectedIndex);

  const handleToggle = (index) => {
    // check - uncheck others
    if (selectedIndex !== index) {
      setSelectedIndex(index);
    } else {
      setSelectedIndex(null);
    }
    // uncheck
  };

  return (
    <div>
      {apps.map((item, idx) => (
        <div>
          <input
            checked={idx === selectedIndex}
            type="checkbox"
            onChange={() => handleToggle(idx)}
          />
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
};
