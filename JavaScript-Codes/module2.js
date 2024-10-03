import { sayHi, sayHello, PI } from './module1.js';

// console.log(a);  // error, because a is not exported
console.log(PI);
sayHi();
sayHello();

import * as module3 from './module3.js';
import User from './module3.js';

module3.sayHi();

console.log(User);