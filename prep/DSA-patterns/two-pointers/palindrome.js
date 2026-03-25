// Invariant = All pairs of characters outside the current window defined by [left, right] have already been checked and were found to be equal.

function isPalindrome(str) {
    // 1️⃣ Preprocess: remove spaces/punctuation & lowercase
    const s = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ""); // only keep letters and numbers

    // 2️⃣ Two pointers
    let left = 0;
    let right = s.length - 1;

    // 3️⃣ Loop
    while (left < right) {
        console.log({
            left, right,
            leftLetter: s[left],
            rightLetter: s[right]
        })

        // 4️⃣ Check characters
        if (s[left] !== s[right]) {
            return false; // mismatch → not palindrome
        }

        left++;
        right--;
    }

    // 5️⃣ All pairs matched
    return true;
}

console.log(isPalindrome("a")); // true
