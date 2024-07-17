// import events from 'events';
// // now we can use like this
// events.EventEmitter
//or
// import { EventEmitter } from 'events';
//or
import EventEmitter from 'events';

const myEmetter = new EventEmitter();

const timeOutListenerFn = (secondsQty) => {
  console.log(`Timeout event! in ${secondsQty} seconds!`);
};

myEmetter.on('timeout', timeOutListenerFn);

setTimeout(() => myEmetter.emit('timeout', 1), 1000);
setTimeout(() => myEmetter.emit('timeout', 2), 2000);

myEmetter.once('singleEvent', () => {
  console.log('Single event occured');
});

// SingleEvent will be called only once
setTimeout(() => myEmetter.emit('singleEvent'), 500);
setTimeout(() => myEmetter.emit('singleEvent'), 1500);

// Remove listener for the timout event
setTimeout(() => myEmetter.off('timeout', timeOutListenerFn), 3000);

setTimeout(() => myEmetter.emit('timeout', 3.5), 3500);
