import EventEmitter from 'events';

const myEmetter = new EventEmitter();

myEmetter.on('myEvent', () => {
  console.log('First event listener');
});

myEmetter.on('myEvent', () => {
  console.log('Second event listener');
});

myEmetter.on('otherEvent', () => console.log('Other Event'));

// Default listeners quontity is 10
myEmetter.setMaxListeners(25);
console.log(myEmetter.getMaxListeners());

console.log(myEmetter.eventNames());

setTimeout(() => myEmetter.emit('myEvent'), 1000);
