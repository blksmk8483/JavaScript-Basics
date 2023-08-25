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
