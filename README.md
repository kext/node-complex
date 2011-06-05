# Complex Numbers

## Example

```js
var complex = require("./complex.js");

var A =
[
	[[0, 1], [1, 1], [0, 1]],
	[[1, 0], [0, -1], [3, 0]],
	[[3, 2], [2, -1], [9, 2]]
];

console.log(complex.rref(A));
```

## Functions

* `add(a, b)` – Adds `a` and `b`.
* `sub(a, b)` – Subtracts `a` and `b`.
* `mult(a, b)` – Multiplies `a` and `b`.
* `div(a, b)` – Divides `a` and `b`.
* `abs(a)` – Absolute value of `a`.
* `arg(a)` – Argument of `a`.
* `exp(a)` – Complex exponential function.
* `ln(a)` – Complex natural logarithm.
* `pow(a, b)` – Complex power.
* `eq(a, b)` – Checks `a` and `b` for equality.
* `rref(A)` – Solves the system of linear equations represented by the matrix `A`. See example above.
