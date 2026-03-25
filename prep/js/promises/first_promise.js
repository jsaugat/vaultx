function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
      /**
       * ! resolve:
       * ! marks the promise to FULFILLED (it does NOT run the callback )
       * ! queues .then handlers into the microtask queue
       */
    }, ms);
  });
}

console.log("first log")
delay(2000).then((msg) => console.log(msg));
console.log("last log")
