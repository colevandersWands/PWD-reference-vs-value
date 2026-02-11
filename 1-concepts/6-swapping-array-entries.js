"use strict";

const x = [1, "b", 3];
const y = ["a", 2, "c"];
let temp;

temp = x[1];
x[1] = y[1];
y[1] = temp;

console.log("corrected numbers array:", x);
console.log("corrected strings arrray:", y);
console.log("also the numbers array:", temp);
