"use strict";

/* `const` and arrays

    Think of it like locking your backpack to a pole:
    - people can't move your backpack
    - but they can still take things out and put things in

*/

const backpack = ["pencil", "tablet", "charger", "gum"];

// the array referenced by your variable can be modified
backpack.pop();
backpack[1] = "empty bottle";
backpack.push("chewed gum");

// the variable's reference cannot be modified
backpack = "nope!";
