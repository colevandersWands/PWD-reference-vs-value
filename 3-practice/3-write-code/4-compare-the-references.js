"use strict";


console.assert(nested[0] === nested[2], "first and third are same reference");
console.assert(nested[1] !== nested[0], "second is different");
console.assert(nested[0][0] === 10, "first inner starts with 10");
console.assert(nested[0][1] === 20, "first inner ends with 20");
console.assert(nested[1][0] === 30, "second inner starts with 30");
console.assert(nested[1][1] === 40, "second inner ends with 40");
console.assert(nested.length === 3, "three elements in outer array");
