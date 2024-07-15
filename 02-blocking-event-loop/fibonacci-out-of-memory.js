// F(n) = F(n-1) + F(n-2)
setTimeout(() => console.log('Timeout'), 0);

function fibonacci(n) {
  return new Promise((resolve, reject) => {
    if(n < 2) {
      return resolve(n);
    }
    setImmediate(() => {
      Promise.all([fibonacci(n - 1), fibonacci(n - 2)])
      .then(([fib1, fib2]) => resolve(fib1 + fib2))
    })
  })
  
}

// Heap out of memory
fibonacci(40).then((res) => console.log(res))