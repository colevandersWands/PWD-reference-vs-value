const grid = [
  [1, 2, 3],
  [4, 5, 6],
];

grid[0][2] = 30;
grid[1][0] = 40;

console.assert(grid[0][0] === _, "row 0, col 0");
console.assert(grid[0][2] === _, "row 0, col 2");
console.assert(grid[1][0] === _, "row 1, col 0");
console.assert(grid[1][1] === _, "row 1, col 1");
