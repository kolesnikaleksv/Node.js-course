const { myName, myHobbies } = require('./multiple-export');

const myFriendsName = 'Alice';

exports.myFriendsName = myFriendsName;
exports.myName = myName;
// property names could be different from the variable name
exports.myGreatHobbies = myHobbies;
