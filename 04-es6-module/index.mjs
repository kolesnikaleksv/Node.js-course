// console.log(module); //ReferenceError: module is not defined in ES module scope

// // it will not work to because obj 'arguments' can be only in function
// console.log(arguments.callee.toString());

import { season, temperature } from './named-exports.mjs';
import { isRaining, humidity } from './inline-exports.mjs';
import getData from './default-exports.mjs';
import DEFAULT_SERVER, {
  PASSWORD,
  LOGIN as MY_LOGIN,
} from './mixed-exports.mjs';

console.log(season, ' and ', temperature);

console.log(isRaining);
console.log(humidity);

getData('https://jsonplaceholder.typicode.com/posts/1')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

console.log(DEFAULT_SERVER, PASSWORD, MY_LOGIN);
