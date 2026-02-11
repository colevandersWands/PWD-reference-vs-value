"use strict";

const arr1 = [];
const arr2 = [];

const alsoArr1 = arr1;

console.log("comparing two arrays with the same values:", arr1 === arr2);
console.log("comparing the same array in two variables", arr1 === alsoArr1);
