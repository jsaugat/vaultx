const foobar = () => {
  const res = [];

  for (let i = 1; i <= 50; i++) {
    let val = "";

    if (i % 3 === 0 && i % 5 === 0) val += "fooBar";
    else if (i % 3 === 0) val += "foo";
    else if (i % 5 === 0) val += "bar";

    res.push(val || i);
  }

  return res;
};

const skip = () => {
  const res = [];
  for (let i = 1; i <= 30; i++) {
    if (i % 4 == 0) {
      continue;
    }

    res.push(i);
  }

  return res;
};

const afrom = () => {
  const arr = Array.from({ length: 5 }, (_, i) => {
    return i + 1;
  });

  return arr;
};
console.log(afrom());

const boom = () => {
  for (let i = 1; i <= 30; i++) {
    if (i.toString().includes("3")) return "boom";
    else return i;
  }
};

const hit = (n) => {
  const result = [];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;

    if (sum % 10 === 0) result.push("hit");
    else result.push(i);
  }

  return result;
};

const alternateLabeling = () => {
  const res = [];
  for (let i = 1; i <= 20; i++) {
    res.push(i % 2 === 0 ? "Even" : "Odd");
  }
  return res;
};

const reverseOnCondition = () => {
  const res = [];
  for (let i = 1; i <= 30; i++) {
    let value;
    if (i % 7 === 0) {
      value = Number(i.toString().split("").reverse().join(""));
    } else {
      value = i;
    }
    res.push(value);
  }
  return res;
};

const countOcc = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return arr.reduce((acc, n) => {
    if (n % 2 === 0) {
      acc["two"] = (acc["two"] || 0) + 1;
    } else if (n % 3 === 0) {
      acc["three"] = (acc["three"] || 0) + 1;
    }

    return acc;
  }, {});
};

const rangeFilter = () => {
  const allNums = Array.from({ length: 50 }, (_, i) => i + 1);
  const filtered = allNums.filter((num) => {
    // div by 3 or 5 > true
    // div by both > false
    // false

    if (num % 3 === 0 && num % 5 === 0) return false;
    else if (num % 3 === 0) return true;
    else if (num % 5 === 0) return true;
    else return false;
  });

  return filtered;
};

const pattern = (n) => {
  const res = [];

  // Control row
  for (let i = 1; i <= n; i++) {
    let line = "";

    // Build each row
    for (let j = 1; j <= i; j++) {
      line += j;
    }

    res.push(line);
  }

  return res;
};

const patternStars = (n) => {
  const res = [];

  // Control row
  for (let i = 1; i <= n; i++) {
    let line = "";

    // Build each row
    for (let j = 1; j <= i; j++) {
      line = Array.from({ length: j }, (_, i) => "*").join("");
    }

    res.push(line);
  }

  return res;
};

const customRuleEngine = (n) => {
  const rule = [
    { div: 2, label: "A" },
    { div: 3, label: "B" },
  ];

  Array.from({ length: n });
};
