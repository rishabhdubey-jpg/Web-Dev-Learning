// Use logial operators to find whether the age of A person lies between 10 and 20?

// let age = prompt("Enter the Age?");
// if (age >= 10 && age <= 20) {
//     console.log("The Age is lies b/w 10 and 20.");
// } else if (age > 0 && age < 10) {
//     console.log("The Age is below 10.");
// } else if (age > 20) {
//     console.log("The Age is above 20.");
// } else {
//     console.log("Invalid Age");
// }


// Demonstrate the use of switch case statements in Javascript

// switch (true) {
//     case (age >= 10 && age <= 20):
//         console.log("The age lies between 10 and 20.");
//         break;

//     case (age > 0 && age < 10):
//         console.log("The age is below 10.");
//         break;

//     case (age > 20):
//         console.log("The age is above 20.");
//         break;

//     default:
//         console.log("Invalid age");
//         break;
// }


// Write a JavaScript program to find whether a number is Divisible by 2 and 3.
// let num = prompt("Enter a number?");

// num = Number(num);

// if (num % 2 === 0 && num % 3 === 0) {
//     console.log("Number is divisible by 2 and 3 both.");
// }
// else if (num % 2 === 0) {
//     console.log("Number is divisible by 2.");
// }
// else if (num % 3 === 0) {
//     console.log("Number is divisible by 3.");
// }
// else {
//     console.log("Number is not divisible by 2 nor 3.");
// }


// Write a JavaScript program to find whether a number is divisible by either 2 or 3.
// let num = prompt("Enter a number?");

// num = Number(num);
// if (num % 2 === 0 || num % 3 === 0) {
//     console.log("Number is divisible by either 2 or 3.");
// }
// else {
//     console.log("Number is not divisible by either 2 nor 3.");
// }   


// Print You can Drive or You cannot Drive based on age using ternary operator
let age = prompt("Enter your age?");
age = Number(age);

age > 18 ? console.log("You can drive.") : console.log("You cannot drive.");