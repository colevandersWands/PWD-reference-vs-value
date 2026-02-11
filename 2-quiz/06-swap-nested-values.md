# Swap Nested Values

```js
const arr = [["x", "y"], ["a", "b"]];
let temp = arr[0][0];
arr[0][0] = arr[1][0];
arr[1][0] = temp;
```

---

<strong>1. What is <code>arr[0][0]</code> after the swap?</strong>

<details>
<summary><em>A. <code>"x"</code></em></summary>
<br>

✖ Nope. `"x"` was saved to `temp`, then `arr[1][0]` (`"a"`) was written into `arr[0][0]`.

</details>

<details>
<summary><em>B. <code>"a"</code></em></summary>
<br>

✔ Correct! `arr[1][0]` which is `"a"` was written into `arr[0][0]`.

</details>

<details>
<summary><em>C. <code>"y"</code></em></summary>
<br>

✖ Nope. `arr[0][1]` was not involved in the swap.

</details>

<details>
<summary><em>D. <code>undefined</code></em></summary>
<br>

✖ Nope. A value was assigned at every step.

</details>
