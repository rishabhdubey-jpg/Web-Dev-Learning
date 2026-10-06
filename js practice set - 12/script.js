// Write a JavaScript program to print the following after 2 second delay
// Hello
// World

function printHelloWorld() {
    setTimeout(() => {
        console.log("Hello");
        setTimeout(() => {
            console.log("World");
        }, 2000);
    }, 2000);
}
printHelloWorld();


// Write a JavaScript program to find the average of numbers in an array using spread syntax.

function averageOfArray(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}
console.log(averageOfArray([1, 2, 3, 4, 5]));


// Write a JavaScript function which resolves a Promise after p seconds. The function takes n as the parameter. Use an IIFE to execute the functions with different values of n.

function resolveAfterPSeconds(p) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise resolved after ${p} seconds`);
        }, p * 1000);
    });
}

(async function () {
    console.log(await resolveAfterPSeconds(2));
    console.log(await resolveAfterPSeconds(4));
    console.log(await resolveAfterPSeconds(1));
})();


// Write a Simple interest calculator using JavaScript.

function simpleInterest(principal, rate, time) {
    let interest = (principal * rate * time) / 100;
    let amount = principal + interest;

    return {
        interest: interest,
        amount: amount
    };
}

console.log(simpleInterest(10000, 5, 2));