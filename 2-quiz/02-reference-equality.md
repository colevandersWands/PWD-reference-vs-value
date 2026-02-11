# Reference Equality

```js
const x = [1, 2];
const y = [1, 2];

console.log(x === y);
```

---

<strong>1. What does this log?</strong>

<details>
<summary><em>A. <code>true</code></em></summary>
<br>

✖ Nope. Same values, but they are different arrays in memory — different references.

</details>

<details>
<summary><em>B. <code>false</code></em></summary>
<br>

✔ Correct! `===` compares references for arrays, not their contents.

</details>

<details>
<summary><em>C. <code>TypeError</code></em></summary>
<br>

✖ Nope. Comparing arrays with `===` is valid JavaScript — it just compares references.

</details>

<details>
<summary><em>D. <code>undefined</code></em></summary>
<br>

✖ Nope. `===` always returns a boolean.

</details>
