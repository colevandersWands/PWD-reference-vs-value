const a = [1, 2];
const b = [1, 2];
const nested = [a, b];

console.assert((nested[0] === a) === _, "nested[0] is a");
console.assert((nested[1] === a) === _, "nested[1] is not a");
console.assert((nested[0] === nested[1]) === _, "different references");
console.assert((a === b) === _, "same values, different arrays");
