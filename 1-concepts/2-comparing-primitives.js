"use strict";

let x = 2;
let y = 1;
let temp;

temp = x;
x = y;
y = temp;

console.log(x === 1, "test x");
console.log(y === 2, "test y");
console.log(temp === 2, "test z");
