"use strict";

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let temp;

temp = grid[0][0];
grid[0][0] = grid[2][2];
grid[2][2] = temp;

temp = grid[0][2];
grid[0][2] = grid[2][0];
grid[2][0] = temp;

console.assert(grid[0][0] === _, "top-left");
console.assert(grid[0][2] === _, "top-right");
console.assert(grid[1][1] === _, "center (unchanged)");
console.assert(grid[2][0] === _, "bottom-left");
console.assert(grid[2][2] === _, "bottom-right");
