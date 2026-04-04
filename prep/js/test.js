function counter() {
  let count = 0;

  return () => ++count;
}

const fn = counter();

console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
console.log(fn());
