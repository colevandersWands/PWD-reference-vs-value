"use strict";


console.assert(cube[0][0][0] === 1, "cube[0][0][0]");
console.assert(cube[0][0][1] === 2, "cube[0][0][1]");
console.assert(cube[0][1][0] === 3, "cube[0][1][0]");
console.assert(cube[0][1][1] === 4, "cube[0][1][1]");
console.assert(cube[1][0][0] === 5, "cube[1][0][0]");
console.assert(cube[1][0][1] === 6, "cube[1][0][1]");
console.assert(cube[1][1][0] === 7, "cube[1][1][0]");
console.assert(cube[1][1][1] === 8, "cube[1][1][1]");
console.assert(cube.length === 2, "two layers");
console.assert(cube[0].length === 2, "two rows per layer");
console.assert(cube[0][0].length === 2, "two cols per row");
