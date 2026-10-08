// The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countVowels("Hello World")); // Output: 3 (e, o, o)
console.log(countVowels("JavaScript")); // Output: 3 (a, a, i)  
console.log(countVowels("AEIOU")); // Output: 5 (A, E, I, O, U)