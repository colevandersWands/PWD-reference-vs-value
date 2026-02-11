"use strict";

const circularReferenceArray = [];
console.log(circularReferenceArray);

circularReferenceArray.push(circularReferenceArray);
console.log(circularReferenceArray);

circularReferenceArray.push("huh?");
console.log(circularReferenceArray);

circularReferenceArray[1] = circularReferenceArray;
console.log(circularReferenceArray);

circularReferenceArray.pop();
console.log(circularReferenceArray);
