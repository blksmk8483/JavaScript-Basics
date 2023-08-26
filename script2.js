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

// challenge:
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

// challenge:
function percentageOfWorld1(poplulation) {
  return ((poplulation / 7900) * 100).toFixed(2);
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

// challenge:
const percentageOfWorld3 = (poplulation) =>
  ((poplulation / 7900) * 100).toFixed(2);

console.log(
  `Americas population is ${percentageOfWorld3(
    330
  )}% of the total world population.`
);

// ----------------------------------------------------------------------------------
// FUNCTIONS CALLING OUT OTHER FUNCTIONS:

function cutFruitePieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitePieces(apples);
  const oragnePieces = cutFruitePieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${oragnePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// challenge
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
}

describePopulation("Portugal", 14);
describePopulation("America", 330);
describePopulation("Spain", 17);

// ----------------------------------------------------------------------------------
// REVIEWING FUNCTIONS:

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement2(1984, "Brandon"));
console.log(yearsUntilRetirement2(1950, "Sarah"));

// ----------------------------------------------------------------------------------
// Coding Exercise #5: Challenge #1:
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

// Test 1
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);
checkWinner(scoreDolphins2, scoreKoalas2);

// Test 3 (random input)
checkWinner(55, 20);
