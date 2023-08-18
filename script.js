// let js = "amazing";
// // console.log(40 + 8 + 23 - 10);

// console.log("Hey, it's me! Brandon");

// let firstName = "Brandon";

// let lastName = "Knight";

// console.log(firstName);

// console.log(firstName, lastName);
// console.log(`first name: ${firstName}, last name: ${lastName}`);

// let myFirstJob = "concession stand worker";
// let myCurrentJob = "Teacher";

// console.log(`My first job was a ${myFirstJob} at a baseball field.`);

// console.log(false);

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Brandon");

// javaScriptIsFun = "YES!";
// console.log(javaScriptIsFun);

// let year;
// console.log(year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 39;
// age = 38;
// console.log(age);

// const birthYear = 1984;
// // birthYear = 1990;

// // const job

// var job = "programmer";
// job = "teacher";
// console.log(job);

// // ------   Basic Operators   ------

// // Math operators
// const now = 2037;
// // const ageBrandon = 2037 - 1984;
// // const ageSarah = 2037 - 1983;
// const ageBrandon = now - 1984;
// const ageSarah = now - 1983;
// console.log(ageBrandon, ageSarah);

// console.log(ageBrandon * 2, ageBrandon / 2, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8

// const firstName = "Brandon";
// const lastName = "Knight";
// console.log(`${firstName} ${lastName}`);

// // Assignment operators
// let x = 10 + 5; // this equals 15
// x += 10; // this equals x = 10 which equals 25
// x *= 4; // this will get me 100
// x++; // will add +1 you will end up with 101
// x--; // will take away 1 so you end up back with 100
// console.log(x);

// // Comparison Operatros (>, <, >=, <=)
// console.log(ageBrandon > ageSarah);
// console.log(ageBrandon >= 18);

// const isFullAge = ageSarah >= 18;

// -----------------------------------------------------------------------------------

// LECTURE: Values and Variables ------------------------
const country = "United States";
const continent = "North America";
let population = 330000000;

console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types ------------------------
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const, and var ------------------------
language = "English";

// LECTURE: Basic Operators ------------------------

const splitPopulation = population / 2;
console.log(splitPopulation); // 165000000

population++;
console.log(population); //330000001

let finlandPopulation = 6000000;

console.log(population > finlandPopulation); // true

averageCountryPopulation = 3300000;

console.log(population < averageCountryPopulation); // this should be false

// "Portugal is in Europe, and its 11 million people speak Portuguese.";

const portCountry = "Portugal";
const portContinent = "Europe";
let portPopulation = 11;
const portLanguage = "Portuguese";

console.log(
  `${portCountry} is in ${portContinent}, and its ${portPopulation} million people speak ${portLanguage}.`
);
