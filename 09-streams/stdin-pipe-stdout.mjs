// import stream from 'stream';
import { Transform } from 'stream';
import fs from 'fs';

const upperCaseStream = new Transform({
  transform: function (chunk, encoding, cb) {
    const upperCased = chunk.toString().toUpperCase();
    cb(null, upperCased);
  },
});
// small task from tutor
const reverseStream = new Transform({
  transform(chunk, encoding, callback) {
    const reversedStream = chunk.toString().split('');
    const enter = reversedStream.pop();
    const reversed = reversedStream.reverse().concat(enter).join('');
    callback(null, reversed);
  },
});

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout);

// // Pipe to file
// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

// // Pipe to stdout
// process.stdin.pipe(process.stderr);
