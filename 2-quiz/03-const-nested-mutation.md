# `const` and Nested Mutation

> Error analysis: will this throw an error?

```js
const arr = [[1, 2], [3, 4]];
arr[0][0] = 99;
```

---

<strong>1. Will this code throw an error?</strong>

<details>
<summary><em>A. Yes, <code>const</code> prevents all changes</em></summary>
<br>

✖ Nope. `const` prevents reassigning the variable (`arr = ...`), not mutating the object it points to.

</details>

<details>
<summary><em>B. No, the inner value changes to 99</em></summary>
<br>

✔ Correct! `const` blocks `arr = ...` but allows `arr[0][0] = ...` because you're mutating the array, not reassigning the variable.

</details>

<details>
<summary><em>C. Yes, nested arrays are frozen</em></summary>
<br>

✖ Nope. Arrays are not frozen by default. You would need `Object.freeze()` for that.

</details>

<details>
<summary><em>D. No, but <code>arr</code> becomes <code>let</code></em></summary>
<br>

✖ Nope. `const` stays `const` — mutation is just allowed on the object it references.

</details>
