# Pop from Parent

```js
const inner = [1, 2, 3];
const outer = [inner, [4, 5]];
outer.pop();
```

---

<strong>1. Does <code>inner</code> still exist after popping from <code>outer</code>?</strong>

<details>
<summary><em>A. <code>inner</code> is now <code>undefined</code></em></summary>
<br>

✖ Nope. `inner` still references `[1, 2, 3]`. Popping from `outer` removed the `[4, 5]` entry, not `inner`.

</details>

<details>
<summary><em>B. <code>inner</code> is now <code>[4, 5]</code></em></summary>
<br>

✖ Nope. `inner` was declared as `[1, 2, 3]` and was never reassigned.

</details>

<details>
<summary><em>C. <code>inner</code> is still <code>[1, 2, 3]</code></em></summary>
<br>

✔ Correct! `outer.pop()` removed the last element of `outer` (which was `[4, 5]`). `inner` is still `[1, 2, 3]` and `outer` is now `[[1, 2, 3]]`.

</details>

<details>
<summary><em>D. <code>outer</code> is now empty</em></summary>
<br>

✖ Nope. `outer` still has one element: `[inner]` which is `[[1, 2, 3]]`.

</details>
