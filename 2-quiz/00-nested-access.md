# Nested Access

```js
const arr = [["a", "b", "c"], [1, 2, 3]];

console.log(arr[0][1]);
```

---

<strong>1. What does <code>arr[0][1]</code> evaluate to?</strong>

<details>
<summary><em>A. <code>"a"</code></em></summary>
<br>

✖ Nope. That's `arr[0][0]`.

</details>

<details>
<summary><em>B. <code>"b"</code></em></summary>
<br>

✔ Correct! `arr[0]` is `["a","b","c"]`, index `[1]` is `"b"`.

</details>

<details>
<summary><em>C. <code>1</code></em></summary>
<br>

✖ Nope. That's `arr[1][0]`.

</details>

<details>
<summary><em>D. <code>[1, 2, 3]</code></em></summary>
<br>

✖ Nope. That's `arr[1]` — the whole inner array, not a single element.

</details>
