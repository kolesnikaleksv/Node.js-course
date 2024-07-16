const myName = 'Oleksandr';
const myHobbies = ['swimming', 'hiking', 'cycling'];
const myFavoriteNumber = 77;

console.log('Text from the multiple-exports CommonJS module');

// module.exports.myName = myName;
// module.exports.myHobbies = myHobbies;
// module.exports.myFavoriteNumber = myFavoriteNumber;

// or without the 'module' word it's the same because module.exports === exports

exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
