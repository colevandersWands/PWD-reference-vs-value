"use strict";

const data = [
  ["x", "y"],
  [1, 2],
];
let temp;

temp = data[0];
data[0] = data[1];
data[1] = temp;

console.assert(data[0][0] === _, "data[0][0]");
console.assert(data[0][1] === _, "data[0][1]");
console.assert(data[1][0] === _, "data[1][0]");
console.assert(data[1][1] === _, "data[1][1]");
console.assert(temp === data[_], "temp reference");
