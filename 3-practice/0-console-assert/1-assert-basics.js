"use strict";

// console.assert(condition, message)
//   if condition is true -> nothing happens
//   if condition is false -> message is logged as an error

console.assert(1 + 1 === 2, "one plus one is two");
console.assert(typeof "hello" === "string", "hello is a string");
console.assert(3 > 2, "three is greater than two");

// this one will fail! (that's the point)
console.assert(1 === 2, "one is not two — this message appears because the assertion failed");
