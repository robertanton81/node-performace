function getFibonacciNumber(n, memo) {
  memo = memo || {};
  if (n <= 1) {
    return n;
  }
  if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = getFibonacciNumber(n - 2, memo) + getFibonacciNumber(n - 1, memo);
  }
  return memo[n];
}

exports.getFibonacciNumber = getFibonacciNumber;
