"use strict";

const original = [[10, 20], [30, 40]];

const alias = original[0];
const copy = [original[0][0], original[0][1]];

alias[0] = 99;

console.assert(original[0][0] === _, "original changed");
console.assert(alias[0] === _, "alias changed");
console.assert(copy[0] === _, "copy did not change");
console.assert((alias === original[0]) === _, "alias is same ref");
console.assert((copy === original[0]) === _, "copy is different ref");
