// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleUniqueElements(arr) {
    let result = [];
    let previousElement = null;

    for (const element of arr) {
        if (element !== previousElement) {
            result.push(element * 2);
            previousElement = element;
        }
    }
    return result;
}

console.log(doubleUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [2, 4, 6, 8, 10]