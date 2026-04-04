const rules = { 3: "Fizz", 5: "Buzz", 7: "Zap" };

function flexibleFizzBuzz(n, rules) {
  for (let i = 1; i <= n; i++) {
    let output = "";

    for (const num in rules) {
      if (i % num === 0) output += rules[num];
    }

    console.log(output || i);
  }
}

console.log(flexibleFizzBuzz(50, rules));
