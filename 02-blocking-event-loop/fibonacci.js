// F(n) = F(n-1) + F(n-2)
setTimeout(() => console.log('Timeout'), 0);

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(40));
console.log(fibonacci(7));
