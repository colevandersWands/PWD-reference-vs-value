# Nested Modify

```js
const grid = [[1, 2], [3, 4]];
grid[1][0] = 99;
```

---

<strong>1. What is <code>grid[1][0]</code> after this code runs?</strong>

<details>
<summary><em>A. <code>3</code></em></summary>
<br>

✖ Nope. Was 3, but got overwritten by the assignment.

</details>

<details>
<summary><em>B. <code>99</code></em></summary>
<br>

✔ Correct! Direct assignment to `grid[1][0]`.

</details>

<details>
<summary><em>C. <code>[99, 4]</code></em></summary>
<br>

✖ Nope. That's the whole `grid[1]`, not `grid[1][0]`.

</details>

<details>
<summary><em>D. <code>undefined</code></em></summary>
<br>

✖ Nope. The index exists and was just assigned a value.

</details>
