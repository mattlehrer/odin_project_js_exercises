const fibonacci = function(n) {
  n = Number(n);
  if (n < 1 || !Number.isInteger(n)) return "OOPS";
  if (n < 3) return 1;
  return fibonacci(n-2) + fibonacci(n-1);
}

module.exports = fibonacci
