// Problem: Given an array nums and a target, return indices of two numbers that add up to target

function twoSum(nums, target) {
    // 1️⃣ Create a map to store number → index
    // Invariant: For any number we've seen, its index is in the map
    const map = new Map();

    // 2️⃣ Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // 3️⃣ Compute the complement that would sum to target
        const complement = target - num;

        // 4️⃣ Check if complement exists in map
        // Invariant ensures if complement exists, we've already seen it
        if (map.has(complement)) {
            // ✅ Found the pair: return indices
            return [map.get(complement), i];
        }

        // 5️⃣ Otherwise, store current number with its index
        map.set(num, i);
    }

    // 6️⃣ If no pair found, return empty array (or throw)
    return [];
}

// Example
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
