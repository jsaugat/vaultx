const list = [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1]; // 5

function getCount(list) {
  let totalCount = 0;
  let count = 0;

  for (let element of list) {
    // If reached 1 then increase count
    if (element == 1) {
      count += 1;
      if (totalCount < count) {
        totalCount = count;
      }
    } else {
      count = 0;
    }
  }

  return totalCount;
}

console.log(getCount(list));
