const data = [
  [_, _, _],
  [_, _],
];

console.assert(data[0][0] === "x", 'data[0][0] is "x"');
console.assert(data[0][1] === "y", 'data[0][1] is "y"');
console.assert(data[0][2] === "z", 'data[0][2] is "z"');
console.assert(data[1][0] === 10, "data[1][0] is 10");
console.assert(data[1][1] === 20, "data[1][1] is 20");
console.assert(data.length === 2, "two inner arrays");
console.assert(data[0].length === 3, "first has 3 elements");
console.assert(data[1].length === 2, "second has 2 elements");
