//! A Promise chain is just a value conveyor belt, and return decides what gets put on the belt.

function delay(ms) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}

delay(500)
  .then(() => "A")
  .then((val) => val + "B")
  .then((val) => console.log(val));
// PRINTS > AB

delay(500)
  .then(() => {
    "A";
  }) //! this returned undefined
  .then((val) => val + "B")
  .then((val) => console.log(val));
// PRINTS > undefinedB
