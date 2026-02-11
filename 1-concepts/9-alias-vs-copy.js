"use strict";

const nested = [[10, 20], [30, 40]];

// alias: points to the SAME inner array
const alias = nested[0];

// copy: a NEW array with the same values
const copy = [nested[0][0], nested[0][1]];

// modify through alias
alias[0] = 99;

// alias and nested[0] both changed (same reference)
console.log("nested[0][0]:", nested[0][0]);
console.log("alias[0]:", alias[0]);

// copy is independent (different reference)
console.log("copy[0]:", copy[0]);

console.log("alias === nested[0]:", alias === nested[0]);
console.log("copy === nested[0]:", copy === nested[0]);
