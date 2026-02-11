"use strict";

/* A suggested workflow for studying code in your DevTools' debugger

  Getting Ready
  1 - open this  repository's index.html file in your browser
  2 - open and configure your DevTools (this will take some searching and practice)
    - move it to the right or left of your browser
    - open the "sources" tab
    - hide the navigator (the menu on the left with this page's scripts)
    - in the right panel, collapse the section called "threads" (if it's there)
    - open the console in the drawer (that part down at the bottom)

  Studying
  1 - click the button for script you want to study
  2 - find the highlighted line of code in the debugger (this is the first line that will be executed)
  3 - for each step in your script's execution:
    A - before pressing the "Step" button (->) button ask yourself (out loud if possible)
        - "what will the memory panel on the right look like after this step is finished?"    
            ... read from memory?"
            ... write to memory?"  (careful, it's possible to do both!)
            ... log to the console?"
            ... create a new block scope?"
            ... decide the flow of my program?" (ie. if, while, for)
        - "which line will be executed next?"
        - Pro Tip: write and draw your predictions on a piece of paper! (really, do this.  it helps)
    B - press "Step" button (->*) and check if you were right or wrong
    C - repeat
  4 - go back to VSCode and make any changes to your .js file
  5 - repeat

  Note: all the different stepping buttons in the debugger? try them all!

*/

const input = prompt('enter "hello"');

let didOrNot;
if (input === "hello") {
  didOrNot = "did";
} else {
  didOrNot = "did not";
}

const message = `you ${didOrNot} enter "hello"`;
alert(message);
