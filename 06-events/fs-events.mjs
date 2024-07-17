import EventEmitter from 'events';
import fs from 'fs';

const fileEmitter = new EventEmitter();

const filePath = './first.txt';

fileEmitter.on('writeComplete', () => {
  console.log(`File ${filePath} was written`);
  fs.appendFile(filePath, '\nOne more line', () => {
    fileEmitter.emit('appendComplete');
  });
});

fileEmitter.on('appendComplete', () => {
  console.log(`Appended text to the ${filePath} file`);
  fs.rename(filePath, './renamed-first.txt', () => {
    fileEmitter.emit('renameCompleted');
  });
});

fileEmitter.on('renameCompleted', () => {
  console.log(`Renamed the ${filePath} file`);
});

fs.writeFile(filePath, 'First file text', () => {
  fileEmitter.emit('writeComplete');
});
