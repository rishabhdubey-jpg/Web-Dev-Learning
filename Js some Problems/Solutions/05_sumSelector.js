// The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            break; // Stop summing if a negative number is encountered
        }
        sum += arr[i];
    }
    return sum;
}

// Example usage:
console.log(sumUntilNegative([1, 2, 3, -1, 4])); // Output: 6 (1 + 2 + 3)
console.log(sumUntilNegative([5, 10, 15])); // Output: 30 (5 + 10 + 15)