'use strict';

// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
/*
const dayTemperatures = [];

const calcTempAmplitude = temperature => {
  let tempAmplitude = 0,
    tempMin = 0,
    tempMax = 0;

  for (let i = 0; i < temperature.length; i++) {
    if (temperature[i] > tempMax && temperature[i] !== 'error') {
      tempMax = temperature[i];
    }
    if (temperature[i] < tempMin && temperature[i] !== 'error') {
      tempMin = temperature[i];
    }
  }

  return (tempAmplitude = tempMax - tempMin);
};

for (let i = 0; i < 10; i++) {
  dayTemperatures.push(Math.floor(Math.random() * 100) + 32);
}

dayTemperatures.push('error');

console.log(
  ` A amplitude das temperaturas registradas durante o dia foi: ${calcTempAmplitude(
    dayTemperatures
  )} Fº `
);
*/

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const TEST_DATA = [17, 21, 23];
const TEST_DATA_2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let forecast = '';
  for (let a = 0; a < arr.length; a++) {
    forecast += `${a !== 0 ? '... ' : ''}${arr[a]} ºC in ${a + 1} ${
      a === 0 ? 'day' : 'days'
    }`;
  }

  return forecast;
};

console.log(printForecast(TEST_DATA));
console.log(printForecast(TEST_DATA_2));
