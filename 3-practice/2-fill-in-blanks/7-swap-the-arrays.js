"use strict";

const data = [
  ["a", "b"],
  [1, 2],
  [true, false],
];
let temp;

temp = data[_];
data[_] = data[_];
data[_] = temp;

console.assert(data[0][0] === true, "booleans moved to top");
console.assert(data[0][1] === false, "booleans moved to top");
console.assert(data[2][0] === "a", "strings moved to bottom");
console.assert(data[2][1] === "b", "strings moved to bottom");
console.assert(data[1][0] === 1, "numbers stay in middle");
console.assert(temp === data[2], "temp is same reference as data[2]");
