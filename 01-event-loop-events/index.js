const fs = require('fs');
const dns = require('dns');

const time = performance.now();

function info(text) {
  console.log(text, (performance.now() - time).toFixed(2));
}

info('Program start');

//Close events
fs.writeFile('./test.txt', 'Hello node.js!', () => info('File written'));

//Promises
Promise.resolve().then(() => info('Promise-1'));

//Next tick
process.nextTick(() => info('next tick-1'));

//setImediate (check)
setImmediate(() => info('Immediate-1'));

//Timeouts
setTimeout(() => info('Timeout-1'), 0);
setTimeout(() => {
  process.nextTick(() => info('Next tick 2'));
  info('Timeout-2');
}, 100);

//intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
  console.log(`Interval ${(intervalCount += 1)}`);
  if (intervalCount === 2) clearInterval(intervalId);
}, 50);

// I/0 Events
dns.lookup('localhost', (err, address, family) => {
  info('DNS 1 localhost');
  Promise.resolve().then(() => info('Promise 2'));
  process.nextTick(() => info('Next tick 3'));
});

info('Program end');
