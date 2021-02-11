/*

// LECTURE: Values and Variables

const country = 'Brazil'
const continent = 'South America'
let population = 213;

// LECTURE: Data Types
// LECTURE: let, const and var

const isIsland = false;
let language;

// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

language = 'Portuguese';

// LECTURE: Basic Operators

population++;
// console.log(population);

let finlandPopulation = 6;
// console.log(population > finlandPopulation);

const AVG_POPULATION = 33;
// console.log(population < AVG_POPULATION);

const description1 = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description1);

// LECTURE: Strings and Template Literals

const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description2);

// LECTURE: Type Conversion and Coercion

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// LECTURE: Equality Operators: == vs. ===

const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}


// LECTURE: Logical Operators

if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`)
}

// LECTURE: The switch Statement

let language = "mandarin";

switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}

// LECTURE: The Conditional (Ternary) Operator

const country = "Brazil";
let population = 213;

// population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);

// */