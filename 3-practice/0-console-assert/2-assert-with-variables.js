"use strict";

let x = 5;
let y = 10;
let temp;

temp = x;
x = y;
y = temp;

console.assert(x === _, "x after swap");
console.assert(y === _, "y after swap");
console.assert(temp === _, "temp after swap");

const greeting = "hello";
console.assert(typeof greeting === _, "type of greeting");
console.assert(greeting.length === _, "length of greeting");
