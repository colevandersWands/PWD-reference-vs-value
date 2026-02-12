"use strict";

const cube = [
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]],
];

const a = cube[_][_][_];
console.assert(a === 6, "access 6");

const b = cube[_][_][_];
console.assert(b === 3, "access 3");

const c = cube[_][_][_];
console.assert(c === 8, "access 8");

const d = cube[_][_];
console.assert(d[0] === 7, "inner array starts with 7");
console.assert(d[1] === 8, "inner array ends with 8");
