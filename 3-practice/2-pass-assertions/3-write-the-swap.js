const arr = [
  ["a", "b"],
  ["c", "d"],
];
let temp;

temp = arr[_][_];
arr[_][_] = arr[_][_];
arr[_][_] = temp;

console.assert(arr[0][0] === "c", "swapped to top-left");
console.assert(arr[1][0] === "a", "swapped to bottom-left");
console.assert(temp === "a", "temp holds original");
