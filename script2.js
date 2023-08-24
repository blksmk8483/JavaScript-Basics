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
