"use strict";

// const interface = "Audio";
// const private = 123;

// ----------------------------------------------------------------------------------
// FUNCTIONS:

function logger(a) {
  console.log(`My name is Brandon ${a}`);
}

// calling / running / invoking function
logger("does this work?");
logger("HEY HEY, it does!!!");

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(3, 4));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// FUNCTIONS challenge:
// first way
// function describeCountry(country, population, capitalCity) {
//   console.log(
//     `${country} has ${population} million people and its capital city is ${capitalCity}.`
//   );
// }

// console.log(describeCountry("Finland", 6, "Helsinki"));

// second way
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const describeFinland = describeCountry("Finland", 6, "Helsinki");
const describeAmerica = describeCountry("United States", 6, "Washington, D.C.");
const describePortugal = describeCountry("Portugal", 10, "Lisbon");

console.log(describePortugal, describeAmerica, describeFinland);

// ----------------------------------------------------------------------------------
// FUNCTION DECLARATIONS vs. EXPRESSIONS:

// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1984);
console.log(age1);

// function expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// arrow function
const calcAge2 = (birthYear) => {
  return 2037 - birthYear;
};

const age2 = calcAge2(1984);

console.log(age1, age2);

// FUNCTION DECLARATIONS vs. EXPRESSIONS challenge:
function percentageOfWorld1(poplulation) {
  return (poplulation / 7900) * 100;
}

const AmericaPercentageOfWorld = percentageOfWorld1(330);
console.log(AmericaPercentageOfWorld);

const percentageOfWorld2 = function (poplulation) {
  return (poplulation / 7900) * 100;
};

const spainPercentageOfWorld = percentageOfWorld2(20);
console.log(spainPercentageOfWorld);

// ----------------------------------------------------------------------------------
// ARROW FUNCTIONS:

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1984, "Brandon"));
console.log(yearsUntilRetirement(1975, "Sarah"));
