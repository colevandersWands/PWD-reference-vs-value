"use strict";

const matrix = [[1, 2], [3, 4]];

const row = matrix[_];

row[_] = 99;

console.assert(row === matrix[0], "row is a reference to matrix[0]");
console.assert(matrix[0][0] === 99, "modified through reference");
console.assert(row[1] === 2, "other element unchanged");
