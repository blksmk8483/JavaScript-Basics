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

// ----------------------------------------------------------------------------------
// Introduction to Arrays:

const friend1 = "Michael";
const friend2 = "Sarah";
const friend3 = "Jacob";

const friends = ["Michael", "Sarah", "Jacob"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Brandon";
const brandon = [firstName, "Knight", 2037 - 1984, "teacher", friends];
console.log(brandon);

// Exercise
const age4 = function (birthYear) {
  return 2037 - birthYear;
};

const years7 = [1990, 1967, 2002, 2010, 2018];

const ag1 = age4(years7[0]);
const ag2 = age4(years7[1]);
const ag3 = age4(years7[years7.length - 1]);

console.log(ag1, ag2, ag3);

const ages = [
  age4(years7[0]),
  age4(years7[1]),
  age4(years7[years7.length - 1]),
];

console.log(JSON.stringify(ages));
console.log(ages.toString());

// Challenge
const populations = [10, 15, 35, 300];

// if (populations.length === 4) {
//   console.log(`The array has 4 elements.`);
// } else {
//   console.log(`The array does not have enough elements yet...`);
// }
populations.length === 4
  ? console.log(`The array has 4 elements.`)
  : console.log("Not enough elements.");

// Calling this from previous but copied here for easier reference
// function percentageOfWorld1(poplulation) {
//   return ((poplulation / 7900) * 100).toFixed(2);
// }

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages.toString());
