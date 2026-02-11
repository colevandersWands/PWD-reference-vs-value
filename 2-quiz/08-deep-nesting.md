# Deep Nesting

```js
const cube = [
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]],
];
```

---

<strong>1. What is <code>cube[1][0][1]</code>?</strong>

<details>
<summary><em>A. <code>5</code></em></summary>
<br>

✖ Nope. That's `cube[1][0][0]`.

</details>

<details>
<summary><em>B. <code>6</code></em></summary>
<br>

✔ Correct! `cube[1]` is `[[5,6],[7,8]]`, `[0]` is `[5,6]`, `[1]` is `6`.

</details>

<details>
<summary><em>C. <code>7</code></em></summary>
<br>

✖ Nope. That's `cube[1][1][0]`.

</details>

<details>
<summary><em>D. <code>[5, 6]</code></em></summary>
<br>

✖ Nope. That's `cube[1][0]` — the inner array, not a single element.

</details>
