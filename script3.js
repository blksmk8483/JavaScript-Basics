// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthyear) => 2037 - birthyear;

console.log(calcAge(1984));
console.log(x);

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [39, -29, -69, -99, "what", 5, 7, 1, 15, 14, 4, 2];

// -What is temp amplitude?
// difference between highest and lowest temp

// How to compute max and min temperatures?
// What's a sensor error? and what to do?

// 2) Breaking up into sub-problems
// How to ingnore errors?
// -Find max value in temp array
// Find min valu in temp array
// Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(
    `The maximum temp is ${max}, the minimum temp is ${min}, and the overall amplitude temperature a is ${
      max - min
    }.`
  );
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functinoality twice? NO! just merge the two arrays.

// 2 Breaking up into sub-problems
// How to merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(
    `The maximum temp is ${max}, the minimum temp is ${min}, and the overall amplitude temperature a is ${
      max - -min
    }.`
  );
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures2);
console.log(amplitudeNew);

// ----------------------------------------------------------------------------------
// Debugging with the Console and Breakpoints:
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degress celsius")),
    value: 10,
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// ----------------------------------------------------------------------------------
// Challenge

//  THIS IS WHAT I CAME UP WITH THAT WORKED

// const forecastedMaximumTemps = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (temp) {
//   for (let i = 0; i < temp.length; i++) {
//     console.log(`...${temp[i]}°C in ${[i + 1]} days `);
//   }
// };

// printForecast(forecastedMaximumTemps);
// printForecast(data2);
// console.log(forecastedMaximumTemps);

// ----------------------------------------------------------------------------------
//  THIS IS WHAT THE EXAMPLE SOLUTION WAS

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}°C in ${i + 1} days ...`;
//   }
//   console.log("..." + str);
// };

// printForecast(data1);
// printForecast(data2);

// ----------------------------------------------------------------------------------
//  THIS IS WHAT I WAS TRYING TO DO IN THE FIRST PLACE (I struggled to use the indexOf, I had it as temp.indexOf([i])) and I also tried temp[i].indexOf()...finally took a second and thought about it and got temp.indexOf(temp[i]) -- hooray!!! small victory for Brandon on August 31 @ 10:53pm 😀

const forecastedMaximumTemps1 = [17, 21, 23];
const forecastedMaximumTemps2 = [12, 5, -5, 0, 4];

const printForecast = function (temp) {
  for (let i = 0; i < temp.length; i++) {
    const day = temp.indexOf(temp[i]);
    console.log(`...${temp[i]}°C in ${day} days `);
  }
};

printForecast(forecastedMaximumTemps1);
printForecast(forecastedMaximumTemps2);
