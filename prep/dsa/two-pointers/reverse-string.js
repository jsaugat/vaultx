function reverseStringTwoPointers(str) {
    // Convert the immutable string to a mutable character array
    const charArray = str.split('');

    let left = 0; // Pointer at the start of the array
    let right = charArray.length - 1; // Pointer at the end of the array

    // Loop until the pointers meet or cross in the middle
    while (left < right) {
        // Swap the characters at the left and right pointers
        const temp = charArray[left];
        charArray[left] = charArray[right];
        charArray[right] = temp;

        // Move the pointers towards the center
        left++;
        right--;
    }

    // Convert the reversed array back to a string and return it
    return charArray.join('');
}

// Example usage:
const originalString = 'hello';
const reversedString = reverseStringTwoPointers(originalString);
console.log(reversedString); // Output: 'olleh'

const anotherString = 'TANDEM';
console.log(reverseStringTwoPointers(anotherString)); // Output: 'MEDNAT'
