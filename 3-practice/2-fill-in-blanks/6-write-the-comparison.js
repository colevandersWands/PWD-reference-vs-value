"use strict";

const x = [10, 20];
const y = [30, 40];
const z = x;

const nested = [_, _, _];

console.assert(nested[0] === nested[2], "first and third are same reference");
console.assert(nested[1] !== nested[0], "second is different from first");
console.assert(nested[0][0] === 10, "first inner starts with 10");
console.assert(nested[1][0] === 30, "second inner starts with 30");
console.assert(nested.length === 3, "three inner arrays");
