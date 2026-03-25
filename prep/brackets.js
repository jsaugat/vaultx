function isBalanced(str) {
  const pairs = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  let stack = [];

  for (item of str) {
    if (["{", "(", "["].includes(item)) {
      stack.push(item);
    } else {
      // { !==
      if (stack.pop() !== pairs[item]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("{}()[]{}"));

// {}[]() > true
// {}[]( > false
