/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/



/*
Create a faulty calculator using JavaScript

This faulty calculator:
1. Takes two numbers as input
2. Performs wrong operations 10% of the time

+ ---> -
* ---> +
- ---> /
/ ---> **
*/

const prompt = require("prompt-sync")();

let a = Math.random();

let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let operation = prompt("Enter operation (+, -, *, /): ");

if (a < 0.1) {
    // Faulty operations
    switch (operation) {
        case '+':
            console.log(num1 - num2);
            break;

        case '-':
            console.log(num1 / num2);
            break;

        case '*':
            console.log(num1 + num2);
            break;

        case '/':
            console.log(num1 ** num2);
            break;

        default:
            console.log("Invalid operation");
    }
}
 else {
    // Correct operations
    switch (operation) {
        case '+':
            console.log(num1 + num2);
            break;

        case '-':
            console.log(num1 - num2);
            break;

        case '*':
            console.log(num1 * num2);
            break;

        case '/':
            console.log(num1 / num2);
            break;

        default:
            console.log("Invalid operation");
    }
}