const n = 50;

const result = Array.from({ length: n }, (_, index) => {
  const val = index + 1;

  let output = "";
  if (val % 4 === 0) output += "Hex";
  if (val % 6 === 0) output += "Quad";
  if (val.toString().includes("7")) output += "Lucky";

  return output === "" ? val : output;
});

console.log(result);
