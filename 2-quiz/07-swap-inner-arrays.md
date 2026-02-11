# Swap Inner Arrays

```js
const arr = [["x", "y"], [1, 2]];
let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
```

---

<strong>1. What is <code>arr[0]</code> after the swap?</strong>

<details>
<summary><em>A. <code>["x", "y"]</code></em></summary>
<br>

✖ Nope. That's now at `arr[1]` — it was swapped out.

</details>

<details>
<summary><em>B. <code>[1, 2]</code></em></summary>
<br>

✔ Correct! The entire inner array references were swapped. `arr[0]` now points to what was `arr[1]`.

</details>

<details>
<summary><em>C. <code>[["x", "y"], [1, 2]]</code></em></summary>
<br>

✖ Nope. That's the original whole array, not `arr[0]`.

</details>

<details>
<summary><em>D. <code>undefined</code></em></summary>
<br>

✖ Nope. The swap assigned a value to every position.

</details>
