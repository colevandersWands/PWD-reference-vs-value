"use strict";

const arrayWithStrings = ["a", "b", "c"];
const arrayWithNumbers = [1, 2, 3];
const arrayWithAnything = ["a", 2, true, false, null];

const arrayWithArrays = [arrayWithStrings, arrayWithNumbers, arrayWithAnything];

// update a value in a nested array
arrayWithArrays[0][1] = "hi!";
console.log(arrayWithArrays[0][1]);
console.log(arrayWithStrings[1]);

// copy a value from one nested array to another
arrayWithArrays[1][2] = arrayWithArrays[2][3];
console.log(arrayWithArrays[1][2]);
console.log(arrayWithNumbers[2]);

// remove an array from the parent array
arrayWithArrays.pop();
console.log(arrayWithArrays);
// the removed array still exists!
console.log(arrayWithAnything);
