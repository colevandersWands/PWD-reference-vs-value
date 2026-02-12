"use strict";


console.assert(row === matrix[0], "row is same reference as matrix[0]");
console.assert(matrix[0][0] === 99, "first element is 99");
console.assert(matrix[0][1] === 2, "second element unchanged");
console.assert(row[0] === 99, "row sees the change too");
console.assert(matrix[1][0] === 3, "other row is untouched");
console.assert(matrix[1][1] === 4, "other row is untouched");
