"use strict";

const pairs = [
  [1, "a"],
  [2, "b"],
];
let temp;

temp = pairs[0][1];
pairs[0][1] = pairs[1][1];
pairs[1][1] = temp;

console.assert(pairs[0][0] === _, "pairs[0][0]");
console.assert(pairs[0][1] === _, "pairs[0][1]");
console.assert(pairs[1][0] === _, "pairs[1][0]");
console.assert(pairs[1][1] === _, "pairs[1][1]");
console.assert(temp === _, "temp");
