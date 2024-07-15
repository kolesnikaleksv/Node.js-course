// F(n) = F(n-1) + F(n-2)
setTimeout(() => console.log('Timeout'), 0);

const cache = new Map();

function fibonacci(n) {
  return new Promise((resolve, reject) => {
    if (n < 2) {
      return resolve(n);
    }
    if (cache.has(n)) {
      return resolve(cache.get(n));
    }
    setImmediate(() => {
      fibonacci(n - 1).then((fib1) =>
        fibonacci(n - 2).then((fib2) => {
          cache.set(n, fib1 + fib2);
          resolve(fib1 + fib2);
        })
      );
      // Promise.all([fibonacci(n - 1), fibonacci(n - 2)])
      // .then(([fib1, fib2]) => {
      //   cache.set(n, fib1 + fib2);
      //   resolve(fib1 + fib2);
      // })
    });
  });
}

fibonacci(10).then((res) => console.log(res));
