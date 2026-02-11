# Inner Array Methods

> Trace question: follow each step carefully.

```js
const arr = [["a"], ["b", "c"]];
arr[1].push("d");
arr[1].pop();
arr[1].push("e", "f");
```

---

<strong>1. What is <code>arr[1].length</code> after this code runs?</strong>

Trace it step by step:

- start: `["b", "c"]` (length 2)
- push `"d"`: `["b", "c", "d"]` (length 3)
- pop: `["b", "c"]` (length 2)
- push `"e"`, `"f"`: `["b", "c", "e", "f"]` (length 4)

<details>
<summary><em>A. <code>2</code></em></summary>
<br>

✖ Nope. Multiple operations changed the length after the starting value.

</details>

<details>
<summary><em>B. <code>3</code></em></summary>
<br>

✖ Nope. The pop removed one element after the first push.

</details>

<details>
<summary><em>C. <code>4</code></em></summary>
<br>

✔ Correct! See the trace above — push added "d" (3), pop removed it (2), then push added "e" and "f" (4).

</details>

<details>
<summary><em>D. <code>1</code></em></summary>
<br>

✖ Nope. The array started with 2 elements and grew from there.

</details>
