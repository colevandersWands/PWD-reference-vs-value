# Same Behavior?

> Code comparison: do these two programs behave the same?

**Program A:**

```js
const arr = [[1, 2], [3, 4]];
const first = arr[0];
first[0] = 99;
console.log(arr[0][0]);
```

**Program B:**

```js
const arr = [[1, 2], [3, 4]];
const first = [arr[0][0], arr[0][1]];
first[0] = 99;
console.log(arr[0][0]);
```

---

<strong>1. Do these two programs log the same value?</strong>

<details>
<summary><em>A. Yes, both log <code>99</code></em></summary>
<br>

✖ Nope. Program B copies the primitive values into a new array, so changing `first[0]` in B doesn't affect `arr[0][0]`.

</details>

<details>
<summary><em>B. No, A logs <code>99</code> and B logs <code>1</code></em></summary>
<br>

✔ Correct! Program A creates an alias — `first` and `arr[0]` point to the same array. Program B creates a new array with copied values — `first` is independent from `arr[0]`.

</details>

<details>
<summary><em>C. No, A logs <code>1</code> and B logs <code>99</code></em></summary>
<br>

✖ Nope. That's reversed. A is the alias (same reference), B is the copy (new array).

</details>

<details>
<summary><em>D. Both throw an error</em></summary>
<br>

✖ Nope. Both are valid JavaScript code.

</details>
