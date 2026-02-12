"use strict";

const shelves = [
  ["book"],
  ["plant", "lamp", "vase"],
];

shelves[_].push("clock");
shelves[_].push("pen");
shelves[_].pop();
shelves[_].push("photo");

console.assert(shelves[0].length === 3, "shelf 0 has 3 items");
console.assert(shelves[0][1] === "clock", "clock on shelf 0");
console.assert(shelves[0][2] === "pen", "pen on shelf 0");
console.assert(shelves[1].length === 3, "shelf 1 still has 3 items");
console.assert(shelves[1][2] === "photo", "photo is last on shelf 1");
console.assert(shelves[1][0] === "plant", "plant still first on shelf 1");
