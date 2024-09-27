// unary +, -
const a = 10;
console.log(a, -a);
const b = -20;
console.log(b, -b);

// Operator precedence - BODMAS
const val1 = 3 * 4 + 2 * 6 / 2;
// 3 * 4 + 2 * (3)
// (12) + (6)
// 18
console.log(val1);

const val2 = 3 * (4 + 2) * 6 / 2;
// 3 * (6) * 6 / 2
// 3 * 6 * (3)
// (18) * 3
// 54
console.log(val2);

// Assignment operator
let x = 1;
let y = 2;

let z = 3 - (x = y + 1);
console.log('x', x);
console.log('z', z);

// Short hand operators
let p = 10;
p += 20;    // p = p + 20;
console.log('p', p);

// Increment/Decrement (++/--)
let a1 = 10;
a1++;   // a1 = a1 + 1; // post increment
console.log('a1', a1);
a1--;   // a1 = a1 - 1; // post decrement
console.log('a1', a1);
++a1;   // a1 = a1 + 1; // pre increment
console.log('a1', a1);

let a2 = 10;
console.log('a2', a2++);    // 10
console.log('a2', a2);      // 11

let a3 = 10;
console.log('a3', ++a3);    // 11
console.log('a3', a3);      // 11

let a4 = 10;
console.log('a4++', a4++);  // 10
console.log('++a4', ++a4);  // 12
console.log('a4--', a4--);  // 12
console.log('--a4', --a4);  // 10

let a5 = 10;
console.log('++a5', ++a5);  // 11
console.log('a5++', a5++);  // 11
console.log('--a5', --a5);  // 11
console.log('a5--', a5--);  // 11

// Comparison OPerators <, >, <=, >=, ==, !, !=
// output will always be boolean value
console.log('2 > 1', 2 > 1);    // true
console.log('2 == 1', 2 == 1);    // false
console.log('2 != 1', 2 != 1);    // true

console.log('Z > A', 'Z' > 'A'); // true    // A - 65, Z - 91
console.log('a > A', 'a' > 'A'); // true    // A - 65, a - 92
console.log('Glow > Glee', 'Glow' > 'Glee'); // true

console.log('2' > 1);   // true, string '2' gets converted into number 2
console.log('01' == 1);   // true, string '01' gets converted into number 1

console.log('true == 1', true == 1); // true, true value gets converted into number 1
console.log('false == 0', false == 0); // true, false value gets converted into number 0
console.log('' == false);   // true

// strict equality (===)
console.log('false === 0', false === 0);    // false
// string non-equiliaty (!==)
console.log('false !== 0', false !== 0);    // true

// Always use strict equality (===) operator for comparison instead of ==

console.log('null == undefined', null == undefined);    // true
console.log('null === undefined', null === undefined);  // false

// Logical Operators ||, &&, !
console.log(true || true);  // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false);// false

// OR operator returns first truthy value
console.log(1 || 0);    // 1, since 1 is truthy value
let x1 = 10;
console.log(2 || (x1 = 20)); // 2, since 1st value is truthy, next expression is not even evaluated
console.log('a', a);        // and hence value of remains 10

console.log('h' || 10); // h, since string 'h' is truthy value
console.log('' || 10); // 10, since empty string '' is falsy value, so the output is 10

console.log('null || 10', null || 10);    // 10, null is falsy value
console.log(null || undefined || 10);     // 10, null & undefined are falsy
console.log(null || undefined || 0);      // 0, all are falsy, then last value will be returned
console.log(null || 0 || undefined);

let username = prompt('Enter your name');
if (username === null || username === '') {
    username = 'Anonymous';
}
console.log(username); 

username = prompt('Enter your name');
console.log(username || 'Anonymous');   // Anonymous

let height = 0;
console.log(height || 10);

// null coalescing (??) - will only return next value if the previous value is null/undefined
let h = 0;
console.log(h ?? 10);   // 0
console.log('null ?? 10', null ?? 10);
console.log('undefined ?? 10', undefined ?? 10);


// AND operator
console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false);// false

// AND operator returns first falsy value
console.log('1 && 0  ---> ', 1 && 0);    // 0, first falsy value will be returned
console.log('1 && 3  ---> ', 1 && 3);    // 3, all are truthy, then last value will be returned
console.log('null && 5  ---> ', null && 5); // null, since null is falsy
console.log('1 && 3 && null && 6  ---> ', 1 && 3 && null && 6);   // null


// (NOT) !
console.log('!true --> ', !true); // false
console.log('!false --> ', !false); // true
console.log('!0 --> ', !0); // true
console.log("!'' --> ", !''); // true
console.log("!!null --> ", !!null); // false

// Ternary Operator ? :
let greet = time > 12 ? 'Good Afternoon' : 'Good Morning';
console.log(greet);
