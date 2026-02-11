# Array Length

```js
const arr = [[1], [2, 3], [4, 5, 6]];
```

---

<strong>1. What is <code>arr.length</code>?</strong>

<details>
<summary><em>A. <code>6</code></em></summary>
<br>

✖ Nope. That's the total number of elements across all inner arrays. `.length` only counts direct elements.

</details>

<details>
<summary><em>B. <code>3</code></em></summary>
<br>

✔ Correct! `arr` has 3 elements — three inner arrays. `.length` counts the outer array's entries, not what's inside them.

</details>

<details>
<summary><em>C. <code>1</code></em></summary>
<br>

✖ Nope. That's the length of `arr[0]`.

</details>

<details>
<summary><em>D. <code>undefined</code></em></summary>
<br>

✖ Nope. Arrays always have a `.length` property.

</details>
