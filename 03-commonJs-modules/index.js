const { myName, myHobbies, myFavoriteNumber } = require('./multiple-export');
const sayHi = require('./my-modules/single-export');
const {
  myName: myOtherName, // we can rename imported property if we need it
  myFriendsName,
  myGreatHobbies,
} = require('./export-and-import');

// // Don't use absolute paths
// const sayHi = require('c:\Users\Oleksandr\Desktop\my_professional_development\udemy\node.js_course\03-commonJs-modules\single-export.js');

console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

myHobbies.push('running');
console.log(myGreatHobbies);
sayHi(myName);

console.log(myOtherName, myFriendsName);

// // How we can see the module wrapper function
// console.log(arguments.callee.toString());
// // In output we can see
// // function (exports, require, module, __filename, __dirname) {
// // .....
// // }
