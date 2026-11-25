// Create s variable of type sting and try to add a number to it
var stringg = "abc";
console.log(`The stringg is: ${stringg}`)
var num = 7;
console.log(`The number is: ${num}`)
console.log(`The addition of stringg and num is: ${stringg + num}`)


// Use typeof operator to find the datatype of the stringg in last question
let type = typeof (stringg);
console.log(`datatype of the stringg is: ${type}`)


// Create a const object in javascript Can you change it to hold a number later? 
const obj = {
        name: "Rishabh",
        ph_no: "989344XXXX",
        sem: "5th"
}
// obj = {
//         name: "sorabh"
// }
console.log(`The object is: ${obj}`) // We can't change it to hold a number later.


// Try to add a new key to the const object in Problem 3. Were you able to do it?
//  obj = {
//         name: "Rishabh",
//         ph_no: "989344XXXX",
//         sem: "5th",
//         branch: "CSE"
// } // We can't be able to add a new key to the const object.


// Write a Js program to create a word-meaning dictionary of 5 words.
const dictionary = {
    Serendipity: "The occurrence of finding something good by chance.",
    Eloquent: "Fluent or persuasive in speaking or writing.",
    Benevolent: "Kind and generous.",
    Resilient: "Able to recover quickly from difficulties.",
    Ambiguous: "Open to more than one meaning or interpretation."
};

console.log("Serendipity:", dictionary.Serendipity);
console.log("Eloquent:", dictionary.Eloquent);
console.log("Benevolent:", dictionary.Benevolent);
console.log("Resilient:", dictionary.Resilient);
console.log("Ambiguous:", dictionary.Ambiguous);