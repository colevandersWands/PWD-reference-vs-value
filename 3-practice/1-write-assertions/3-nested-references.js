const matrix = [[1, 2], [3, 4]];

const row0 = matrix[0];

console.assert(row0 === matrix[_], "same reference");

row0[0] = 99;

console.assert(matrix[0][0] === _, "modified through reference");
console.assert(row0[0] === _, "same value through alias");
