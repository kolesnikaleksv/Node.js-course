const path = require('path');

const filePath =
  'C:/Users/Oleksandr/Desktop/my_professional_development/udemy/node.js_course/07-path/index.js';
const textFilePath = 'C:UsersOleksandrDesktop\file.txt';
const relativePath = './node/movie.mov';
const directoryPath = '.node/subfolder';

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js - last part of the path
console.log(path.basename(directoryPath)); //subfolder

console.log(path.dirname(filePath)); // C:/Users/Oleksandr/Desktop/my_professional_development/udemy/node.js_course/07-path - whole path without file name
console.log(path.dirname(directoryPath)); // .node

console.log(path.resolve(relativePath)); // c:\Users\Oleksandr\Desktop\my_professional_development\udemy\node.js_course\07-path\node\movie.mov

console.log(path.extname(textFilePath)); // .txt
console.log(path.extname(directoryPath)); // ''

console.log(path.parse(filePath));
// output of parse method
// {
//   root: 'C:/',
//   dir: 'C:/Users/Oleksandr/Desktop/my_professional_development/udemy/node.js_course/07-path',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }

const parsePath = path.parse(filePath);

console.log(path.join(parsePath.dir, `rename-${parsePath.name}.mjs`));
//C:\Users\Oleksandr\Desktop\my_professional_development\udemy\node.js_course\07-path\rename-index.mjs
