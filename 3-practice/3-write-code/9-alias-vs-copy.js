"use strict";


console.assert(alias === original[0], "alias is same reference");
console.assert(copy !== original[0], "copy is a different array");
console.assert(original[0][0] === 99, "original changed via alias");
console.assert(alias[0] === 99, "alias sees the change");
console.assert(copy[0] === 10, "copy keeps original value");
console.assert(copy[1] === 20, "copy keeps original value");
