# Reference vs. Copy

```js
const original = [[1, 2], [3, 4]];
const copy = [original[0][0], original[0][1]];
copy[0] = 99;
```

---

<strong>1. Does modifying <code>copy</code> affect <code>original</code>?</strong>

<details>
<summary><em>A. Yes, <code>original[0][0]</code> is now 99</em></summary>
<br>

✖ Nope. `copy` is a NEW array with copied primitive values — it has no connection to `original`.

</details>

<details>
<summary><em>B. No, <code>original</code> is unchanged</em></summary>
<br>

✔ Correct! `copy` holds independent primitive values. Changing `copy[0]` doesn't affect the original array.

</details>

<details>
<summary><em>C. Yes, arrays are always linked</em></summary>
<br>

✖ Nope. Only aliases (references to the same array) are linked. Copying individual values creates an independent array.

</details>

<details>
<summary><em>D. It throws an error</em></summary>
<br>

✖ Nope. This is valid code — you can assign to elements of a `const` array.

</details>
