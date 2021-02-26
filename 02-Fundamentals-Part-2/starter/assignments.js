"use strict"

// LECTURE: Functions

/* function describeCountry(country, population, capitalCity) {
    return console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

describeCountry("Brazil", "213", "Rio de Janeiro");
describeCountry("Japan", "126", "Tokyo");
describeCountry("USA", "330", "Washington D.C."); */

// LECTURE: Function Declarations vs. Expressions

/* let brazilPopulation = 213;
let japanPopulation = 126;
let usaPopulation = 330;
let chinaPopulation = 1441;

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const brazilPercentage = percentageOfWorld1(brazilPopulation);
const japanPercentage = percentageOfWorld1(japanPopulation);
const usaPercentage = percentageOfWorld1(usaPopulation);
const chinaPercentage = percentageOfWorld2(chinaPopulation);

console.log(`Brazil: ${brazilPercentage}, Japan: ${japanPercentage}, USA: ${usaPercentage}, China: ${chinaPercentage}`);
*/

// LECTURE: Arrow Functions

/* const percentageOfWorld3 = population => (population / 7900) * 100;

const brazilPercentage = percentageOfWorld3(213);
console.log(brazilPercentage); */

// LECTURE: Functions Calling Other Functions

/* function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}`;
}

console.log(describePopulation("China", 1441));
console.log(describePopulation("USA", 330));
console.log(describePopulation("Brazil", 213)); */

// LECTURE: Introduction to Arrays

/* const populations = [213, 126, 330, 1441];

if (populations.length === 4) {
    console.log("True");
} else {
    console.log("False");
}

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentages = [percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])];

console.log(percentages); */

// LECTURE: Basic Array Operations (Methods)

/* const neighbours = ["Argentina", "Bolivia", "Colombia", "French Guiana", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"];

neighbours.push("Utopia");

neighbours.pop();

if (neighbours.includes("Germany") === false) {
    console.log("Probably not a central European country :D");
}

const index = neighbours.indexOf("Colombia");

neighbours[index] = "Republic of Colombia"; */

// LECTURE: Introduction to Objects

/* const myCountry = {
    country: "Brazil",
    capital: "Brasilia",
    language: "Portuguese",
    population: 213,
    neighbours: ["Argentina", "Bolivia", "Colombia", "French Guiana", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"],

    // For Object Methods Lecture:
    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },

    checkIsland: function() {
        this.isIsland = this.neighbours.length > 0 ? false : true;
        return this.isIsland;
    }
}; */

// LECTURE: Dot vs. Bracket Notation

/* console.log(`${myCountry.country} has ${myCountry.population} million \
${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring \
countries and a capital called ${myCountry.capital}`);

myCountry.population -= 2;

console.log(myCountry.population);

myCountry["population"] += 2;

console.log(myCountry.population); */

// LECTURE: Object Methods

/* myCountry.describe();
myCountry.checkIsland();

console.log(myCountry.isIsland);
 */


// LECTURE: Iteration: The for Loop

/* for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
} */

// LECTURE: Looping Arrays, Breaking and Continuing

/* const populations = [213, 126, 330, 1441];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2); */

// LECTURE: Looping Backwards and Loops in Loops

/* const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
} */

// LECTURE: The while Loop

/* const populations = [213, 126, 330, 1441];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentages3 = [];

let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(percentages3); */
