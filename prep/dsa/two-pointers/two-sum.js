// Two-pointer solution for Two Sum
// Input: sorted array 'nums', target sum 'target'
// Output: indices (or values) of two numbers that add up to target
function twoSum(nums, target) {
  let left = 0; // start pointer at beginning
  let right = nums.length - 1; // end pointer at the end

  while (left < right) {
    // stop when pointers meet
    const sum = nums[left] + nums[right]; // current sum

    if (sum === target) {
      // found the pair
      return [nums[left], nums[right]];
    } else if (sum < target) {
      // sum too small → increase left
      left++;
    } else {
      // sum too large → decrease right
      right--;
    }
  }

  console.log("info: ", {
    left,
    right,
  });

  return null; // no pair found
}

// Example usage:
console.log(twoSum([1, 2, 4, 6, 8, 11], 10)); // [2, 8]
