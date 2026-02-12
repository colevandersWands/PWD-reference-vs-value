"use strict";


console.assert(drinks[0] === "coffee", "first drink");
console.assert(drinks[1] === "tea", "second drink");
console.assert(drinks[2] === "water", "third drink");
console.assert(snacks[0] === "cake", "first snack");
console.assert(snacks[1] === "cookie", "second snack");
console.assert(menu[0] === drinks, "first row is drinks");
console.assert(menu[1] === snacks, "second row is snacks");
console.assert(menu[0][1] === "tea", "access tea through menu");
console.assert(menu.length === 2, "two rows");
