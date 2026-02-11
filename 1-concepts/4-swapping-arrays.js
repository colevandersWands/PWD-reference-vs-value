"use strict";

let x = [1, 2, 3];
let y = ["a", "b", "c"];
let temp;

temp = x;
x = y;
y = temp;

console.log("array stored in x:", x);
console.log("array stored in y:", y);
console.log("the same array as in y:", temp);
