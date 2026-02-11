const shelves = [
  ["book", "lamp"],
  ["plant"],
];

shelves[0].push("clock");
shelves[1].pop();
shelves[1].push("vase", "photo");

console.assert(shelves[0].length === _, "shelf 0 length");
console.assert(shelves[1].length === _, "shelf 1 length");
console.assert(shelves[0][2] === _, "shelf 0, item 2");
console.assert(shelves[1][0] === _, "shelf 1, item 0");
console.assert(shelves[1][1] === _, "shelf 1, item 1");
