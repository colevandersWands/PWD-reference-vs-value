"use strict";


console.assert(data[0][0] === 1, "numbers now first");
console.assert(data[0][1] === 2, "numbers now first");
console.assert(data[1][0] === "x", "strings now second");
console.assert(data[1][1] === "y", "strings now second");
console.assert(temp === data[1], "temp references the swapped array");
