/**
 * 
 * @param {*} nums 
 */
const squaresOfSortedArray = (nums) => {
    // New empty array
    const result = new Array(nums.length)

    let left = 0 // Left pointer
    let right = nums.length - 1 // Right pointer
    let position = nums.length - 1 // Position to insert starting from the end

    while (right >= left) {
        const leftSq = nums[left] ** 2
        const rightSq = nums[right] ** 2

        if (rightSq > leftSq) {
            result[position] = rightSq
            right--
        } else {
            result[position] = leftSq
            left++
        }

        position--
    }

    return result
}
const input1 = [-4, -1, 0, 3, 10]
// squared:  16, 1, 0, 9 , 100]
// sorted: [0, 1, 9, 16, 100]

console.log(squaresOfSortedArray(input1))

