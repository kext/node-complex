var complex = require("./complex.js");

var A =
[
	[[0, 1], [1, 1], [0, 1]],
	[[1, 0], [0, -1], [3, 0]],
	[[3, 2], [2, -1], [9, 2]]
];

console.log(complex.rref(A));
