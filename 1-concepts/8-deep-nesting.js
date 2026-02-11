"use strict";

const cube = [
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]],
];

// 3 levels of indexing: cube[layer][row][col]
console.log("cube[0][0][0]:", cube[0][0][0]);
console.log("cube[1][1][0]:", cube[1][1][0]);

// modifying a deeply nested value
cube[0][1][1] = 40;
console.log("after change:", cube[0][1][1]);
