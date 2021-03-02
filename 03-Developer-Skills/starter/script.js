// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

/* const calcTempAmplitude = function (temps) {
	let max = temps[0];
	let min = temps[0];

	for (let i = 1; i < temps.length; i++) {
		if (temps[i] === "error") {
			continue;
		} else if (max < temps[i]) {
			max = temps[i];
		} else if (min > temps[i]) {
			min = temps[i];
		}
	}

	const amplitude = max - min;
	return amplitude;
};

console.log(calcTempAmplitude(temperatures)); */

// Debugging with the Console and Breakpoints

/* const measureKelvin = function () {
	const measurement = {
		type: "temp",
		unit: "celsius",
		value: Number(prompt("Degree celsius:")),
	};

	const kelvin = measurement.value + 273;
	return kelvin;
};

console.log(measureKelvin()); */

// Coding Challenge #1

/* const temperatures = [17, 21, 23];
// const temperatures = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
	const len = arr.length;
	let str = "... ";

	for (let i = 0; i < len; i++) {
		str += `${arr[i]}°C in ${i + 1} days... `;
	}
	console.log(str);
};

printForecast(temperatures);
 */
