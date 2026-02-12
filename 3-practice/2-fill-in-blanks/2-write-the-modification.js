"use strict";

const grid = [
  [0, 0, 0],
  [0, 0, 0],
];

grid[_][_] = 5;
grid[_][_] = 10;
grid[_][_] = 15;

console.assert(grid[0][1] === 5, "row 0, col 1 is 5");
console.assert(grid[1][0] === 10, "row 1, col 0 is 10");
console.assert(grid[1][2] === 15, "row 1, col 2 is 15");
