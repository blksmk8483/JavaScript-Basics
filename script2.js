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

// ----------------------------------------------------------------------------------
// Basic Array Operators (Methods):

// Add elements:
const friends2 = ["Michael", "Sarah", "Jacob"];
friends2.push("Brandon"); // push method adds to the end of an array
console.log(friends2.toString());

friends2.unshift("John"); // unshift method adds to the beginning of an array
console.log(friends2);

// Remove elements:
friends2.pop(); // pop method removes the last element from an array
console.log(friends2);

friends2.shift(); //shift method removes the first element from an array
console.log(friends2);

console.log(friends2.indexOf("Sarah")); // Sarah is in position 1 since JS starts at 0
console.log(friends2.indexOf("Bob")); // Bob does not exsist so we get -1

console.log(friends.includes("Sarah")); // true
console.log(friends.includes("Bob")); // false

if (friends2.includes("Sarah")) {
  console.log("You have a friend called Sarah.");
}

// Challenge
const neighbours = ["Mexico", "Canada", "California"];
neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

// Determine if the country is near Germany as an if/else
if (neighbours.includes("Germany")) {
  console.log("You must be a central European country 😀");
} else {
  console.log("Probably not a central European country 😆");
}

// Same but as a ternary
neighbours.includes("Germany")
  ? console.log("You must be a central European country 😀")
  : console.log("Probably not a central European country 😆");

// Or I can just use the !
if (!neighbours.includes("Germany")) {
  console.log("Not a central European country 😛");
}

neighbours[0] = "Spanish";
neighbours[1] = "Ah";
neighbours[2] = "Wokeville";

// Or I can use indexOf
neighbours[neighbours.indexOf("Spanish")] = "Republic of Mexico";

console.log(neighbours);

// CHALLENGE #2

const calcTip = (bill) => {
  return bill <= 300 && bill >= 50 ? 0.15 * bill : 0.2 * bill;
};
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// ----------------------------------------------------------------------------------
// Introductions to Objects:

const brandon1 = {
  firstName: "Brandon",
  lastName: "Knight",
  age: 2037 - 1984,
  job: "web developer",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(brandon1);

console.log(
  `My name is ${brandon1.firstName} ${brandon1.lastName}. I am ${
    brandon1.age
  } years old. I am a ${
    brandon1.job
  } and my friends are ${brandon1.friends.toString()}.`
);

console.log(brandon1["firstName"]);

const nameKey = "Name";
console.log(brandon1["first" + nameKey]);
console.log(brandon1["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Brandon? Choose between firstName, lastName, age, job, and friends."
// );
// console.log(brandon1[interestedIn]);

// if (brandon1[interestedIn]) {
//   console.log(brandon1[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends."
//   );
// }

// const wrongRequest = prompt(
//   "Wrong request! Choose between firstName, lastName, age, job, and friends."
// );

// brandon1[interestedIn] ? console.log(brandon1[interestedIn]) : wrongRequest;

brandon1.location = "Texas";
brandon1["twitter"] = "@blksmk8483";
console.log(brandon1);

// Challenge
//  friends: ["Michael", "Peter", "Steven"],

console.log(
  `${brandon1.firstName} has ${brandon1.friends.length} friends, and his best friend is called ${brandon1.friends[0]}.`
);

// ----------------------------------------------------------------------------------
// Object Methods:
const brandon2 = {
  firstName: "Brandon",
  lastName: "Knight",
  birthYear: 1984,
  job: "web developer",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's licenee.`;
  },
};

console.log(brandon2.calcAge());
// console.log(brandon2["calcAge"](1984));
console.log(brandon2.age);

// Challenge
// "Brandon is a 53-year old web decveloprer, and he has a driver's license."

// console.log(
//   `${brandon2.firstName} is a ${brandon2.calcAge()}-year old ${
//     brandon2.job
//   }, and he has ${
//     brandon2.hasDriversLicense === true ? "a" : "no"
//   } driver's licenee.`
// );

console.log(brandon2.getSummary());

// Dot vs. Bracket Notation challenge

const myCountry = {
  country: "America",
  capital: "Washington D.C.",
  language: "English",
  population: 334,
  neighbours: ["Canada", "Mexico", "California"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighboring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

// Challenge
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     // return mark.mass / (mark.height * mark.height);
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// mark.mbi > john.bmi
//   ? console.log(
//       `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//     )
//   : console.log(
//       `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//     );

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return this.mass / (this.height * this.height);
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return this.mass / (this.height * this.height);
//   },
// };

// mark.calcBMI() > john.calcBMI()
//   ? console.log(
//       `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//         mark.fullName
//       }'s (${mark.calcBMI()})!`
//     )
//   : console.log(
//       `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//         john.fullName
//       }'s (${john.calcBMI()})!`
//     );

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI() > john.calcBMI()
  ? console.log(
      `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
        mark.fullName
      }'s (${mark.calcBMI()})!`
    )
  : console.log(
      `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
        john.fullName
      }'s (${john.calcBMI()})!`
    );

// ----------------------------------------------------------------------------------
// Iteration: The for loop.

// For loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++)

for (let rep = 3; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// Challenge
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting.`);
}

// ----------------------------------------------------------------------------------
// Looping Arrays, Breaking and Continuing:

const brandon3 = [
  "Brandon",
  "Knight",
  2037 - 1984,
  "web developer",
  ["Michael", "Peter", "Steven"],
  "what!!!",
  "it's",
  true,
  "this works!",
];
const types = [];

for (let i = 0; i < brandon3.length; i++) {
  console.log(brandon3[i], typeof brandon3[i]);

  // FIlling types array
  // types[i] = typeof brandon3[i];
  types.push(typeof brandon3[i]);
}

console.log(types);

const years4 = [1991, 2007, 1969, 2020];
const ages4 = [];

for (let i = 0; i < years4.length; i++) {
  ages4.push(2037 - years4[i]);
}

console.log(ages4);

// Continue and Break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < brandon3.length; i++) {
  if (typeof brandon3[i] !== "string") continue;
  console.log(brandon3[i], typeof brandon3[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < brandon3.length; i++) {
  if (typeof brandon3[i] === "number") break;
  console.log(brandon3[i], typeof brandon3[i]);
}

// Challenge:
const populations5 = [10, 15, 35, 300];
const percentages2 = [];

function percentageOfWorldPrime(poplulation) {
  return ((poplulation / 7900) * 100).toFixed(2);
}

for (let i = 0; i < populations5.length; i++) {
  const perc = percentageOfWorldPrime(populations5[i]);
  percentages2.push(perc);
}

console.log(percentages2);

// ----------------------------------------------------------------------------------
// Looping Backwards and Loops in Loops:

// looping backwards
const brandon7 = [
  "Brandon",
  "Knight",
  2037 - 1984,
  "web developer",
  ["Michael", "Peter", "Steven"],
];

console.log("--- LOOPING BACKWARD ---");

for (let i = brandon7.length - 1; i >= 0; i--) {
  console.log(i, brandon7[i]);
}

// loops in loops
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

// Challenge
const listOfNeighbours = [
  [["Canada, Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]],
];

for (let n = 0; n < listOfNeighbours.length; n++) {
  for (let y = 0; y < listOfNeighbours[n].length; y++)
    // console.log(listOfNeighbours[y])
    console.log(`Neighbour: ${listOfNeighbours[n][y]}`);
}

// ----------------------------------------------------------------------------------
// The While Loop:

// for (let rep = 3; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}!`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`You rolled a ${dice}! The Loop is over!!! 🎉`);
}

// challenge: The While Loop
// const populations6 = [10, 15, 35, 300];
// const percentages3 = [];

// function percentageOfWorldPrime(poplulation) {
//   return ((poplulation / 7900) * 100).toFixed(2);
// }

// // for (let i = 0; i < populations6.length; i++) {
// //   const perc = percentageOfWorldPrime(populations6[i]);
// //   percentages3.push(perc);
// // }

// let i = 0;

// while (i < populations6.length) {
//   const perc = percentageOfWorldPrime(populations6[i]);
//   percentages3.push(perc);
// }
// console.log(percentages3);

// CHALLENGE #4
const calcTip8 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills8 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips8 = [];
const totals8 = [];

for (let i = 0; i < bills8.length; i++) {
  const tip = calcTip8(bills8[i]);
  tips8.push(tip);
  totals8.push(tip + bills8[i]);
}

console.log(bills8, tips8, totals8);

const calcAverage2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    // samething this is just the shorthand
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage2([2, 3, 7]));
console.log(calcAverage2(totals));
