"use strict";

const original = [[10, 20], [30, 40]];

const alias = original[_];
const copy = [original[1][_], original[1][_]];

alias[_] = 99;

console.assert(original[1][0] === 99, "original changed via alias");
console.assert(alias === original[1], "alias is same reference");
console.assert(copy[0] === 30, "copy keeps original first value");
console.assert(copy[1] === 40, "copy keeps original second value");
console.assert(copy !== original[1], "copy is a different array");
