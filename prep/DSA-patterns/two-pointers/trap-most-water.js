function maxTrappedWater(height) {
	let left = 0 // set left pointer to beginning
	let right = height.length - 1 // set right pointer to the end

	let maxArea = 0
	let currentArea

	// Until both pointers meet each other
	while (right - left > 1) {
		currentArea = Math.min(height[left], height[right]) * (right - left)

		if (currentArea > maxArea) {
			maxArea = currentArea
		}

		if (height[right] > height[left]) {
			left++
		} else {
			right--
		}
	}

	return maxArea
}

console.log(maxTrappedWater([1, 6, 8, 9, 0, 10, 100]))