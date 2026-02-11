# Alias Mutation

```js
const nested = [[1, 2], [3, 4]];
const row = nested[0];
row[0] = 99;
```

---

<strong>1. What is <code>nested[0][0]</code> after this code runs?</strong>

<details>
<summary><em>A. <code>1</code></em></summary>
<br>

✖ Nope. `row` IS `nested[0]` — they point to the same array. Changing `row[0]` changes the original.

</details>

<details>
<summary><em>B. <code>99</code></em></summary>
<br>

✔ Correct! `row` and `nested[0]` are the same array in memory. Modifying through either reference affects both.

</details>

<details>
<summary><em>C. <code>undefined</code></em></summary>
<br>

✖ Nope. The value was explicitly set to 99.

</details>

<details>
<summary><em>D. <code>[99, 2]</code></em></summary>
<br>

✖ Nope. `nested[0][0]` is the number 99, not the whole array. `nested[0]` would be `[99, 2]`.

</details>
