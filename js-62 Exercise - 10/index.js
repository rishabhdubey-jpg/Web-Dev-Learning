/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let random = Math.random();

let adjective;
let shopName;
let anotherWord;

if (random < 0.33) {
    adjective = "Crazy";
} else if (random < 0.66) {
    adjective = "Amazing";
} else {
    adjective = "Fire";
}

random = Math.random();

if (random < 0.33) {
    shopName = "Engine";
} else if (random < 0.66) {
    shopName = "Foods";
} else {
    shopName = "Garments";
}

random = Math.random();

if (random < 0.33) {
    anotherWord = "Bros";
} else if (random < 0.66) {
    anotherWord = "Limited";
} else {
    anotherWord = "Hub";
}

console.log(adjective + " " + shopName + " " + anotherWord);