# Predictive Stepping: Reference vs. Value

> [predictive stepping](./predictive-stepping.md)

A short introduction to your browser's debugger, predictive stepping,
and reference vs. value with arrays.

---

## Getting Started

1. Clone this repository
2. Open it in VS Code
3. Install the "Live Server" extension
4. Open `index.html` with Live Server
5. Open your browser's DevTools (Sources tab)
6. Read [the predictive stepping guide](./predictive-stepping.md)

---

## Learning Objectives

<details>
<summary>Priority emoji guide</summary>
<br>

- 🥚 Foundation — you should be comfortable completing these
- 🐣 Intermediate — challenging but achievable with effort
- 🐥 Advanced — you understand the idea from examples, practice needed
- 🐔 Bonus — optional stretch, not required

</details>

### [Predictive Stepping](./predictive-stepping.md)

- 🥚 **The Technique**: predict what happens at each step _before_
  pressing the Step button
  - [ ] **Predict the Next Line**: identify which line will execute next
  - [ ] **Predict Memory Changes**: describe what the Scope panel will
        look like after the step
  - [ ] **Classify the Operation**: will the next line read from memory,
        write to memory, log to console, create a scope, or decide control flow?
  - [ ] **Check Your Prediction**: press Step, compare reality to your
        prediction, investigate if wrong
- 🥚 **Using the Debugger**:
  - [ ] **Setting Up DevTools**: Sources tab, panel layout, console drawer
  - [ ] **Stepping Controls**: Step, Step Over, Step Into, Step Out, Resume
  - [ ] **Watching Memory**: read the Scope panel to see variable values
        change after each step
- 🥚 **Using Python Tutor**: visualize the same code in Python Tutor
  to see a different representation of memory

### [1-Concepts](./1-concepts)

- 🥚 **Primitives: Value Semantics**:
  - [ ] **Variable Assignment**: understand `let` and `const` declarations
  - [ ] **Swapping with Temp**: use a temporary variable to swap two values
  - [ ] **Primitive Equality**: `===` compares values for primitives
- 🥚 **Arrays: Reference Semantics**:
  - [ ] **Arrays Are References**: two variables can point to the same array
  - [ ] **Reference Equality**: `===` compares references, not contents
  - [ ] **`const` and Mutation**: `const` prevents reassignment but allows
        push, pop, and index assignment
  - [ ] **Swapping Array References**: swap which array a variable points to
  - [ ] **Swapping Array Entries**: swap individual elements between arrays
- 🐣 **Nested Arrays**:
  - [ ] **Nested Access**: read values with `arr[i][j]` syntax
  - [ ] **Nested Modification**: write values with `arr[i][j] = value`
  - [ ] **Deep Nesting**: navigate 3-level structures with `arr[i][j][k]`
  - [ ] **Alias vs. Copy**: distinguish aliasing an inner array from
        manually copying its values
- 🐔 **Circular References**: an array can contain itself

### [2-Quiz](./2-quiz)

- [ ] 🐣 **Quiz**: open the `.md` files in VSCode and answer
      multiple-choice questions about nested arrays, references, and mutations

### [3-Practice](./3-practice)

- [ ] 🥚 **Console Assert Basics**: learn how `console.assert()` works
      with simple primitives
- [ ] 🐣 **Write Assertions**: predict program output by filling in `_`
      blanks in `console.assert()` calls
- [ ] 🐥 **Pass Assertions**: write program code to make completed
      assertions pass
