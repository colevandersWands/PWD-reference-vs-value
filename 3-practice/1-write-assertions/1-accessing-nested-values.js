"use strict";

const colors = [
  ["red", "green", "blue"],
  ["cyan", "magenta", "yellow"],
];

const value1 = colors[0][1];
console.assert(value1 === _, "access green");

const value2 = colors[_][_];
console.assert(value2 === "yellow", "access yellow");

const value3 = colors[_][_];
console.assert(value3 === "cyan", "access cyan");
