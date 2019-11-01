function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce((acc, curr) => acc + curr, 0);
}

function multiply (arr) {
	return arr.reduce((acc, curr) => acc * curr, 1);
}

function power(base, exp) {
	return base ** exp;
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
  power,
	factorial
}