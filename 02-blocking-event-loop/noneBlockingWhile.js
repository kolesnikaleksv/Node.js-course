// How we can use the neverending while loop without blocking
const fs = require('fs');
const { resolve } = require('path');

let isRunning = true;

setTimeout(() => isRunning = false, 10);
process.nextTick(() => console.log('Next tick'));
 
function setImmedatePromise() {
  return new Promise((resolve, reject) => {
    setImmediate(() => resolve( ))
    // // With resolve we stay on the same event loop iteration
    // resolve()
  })
}

async function whileLoop() {
  while(isRunning) {
    console.log('While loop is running...');
    await setImmedatePromise(); 
  }
}

whileLoop().then(() => console.log('While loop ended'))  