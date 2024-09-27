// dynamic type language
let message = "Hello World!";
message = 10;

// Number
let n = 10; // integer
n = 12.234; // floating/double
n = Infinity;
console.log(n);
console.log(1 / 0);
n = -Infinity;
console.log(n);
console.log(-1 / 0);

n = NaN;    // Not a Number
console.log(n);

console.log("some string" / 2); // NaN

console.log('1' + 2);
console.log(1 + '2');
console.log(1 + 1 + '2');   // -> 2 + '2' -> '22'
console.log('1' + 1 + 2);   // -> '11' + 2 -> '112'

let x = '10';
// console.log(+x);
console.log(x + 20);
console.log(+x + 20);
console.log(Number(x));
console.log(Number(x) + 20);

console.log(+'hello');          // NaN
console.log(Number('hello'));   // NaN

console.log(NaN + 1);

console.log(0.1 + 0.2);

// Range of number is -(2^53 - 1) to (2^53 - 1)
// BigInt
let n1 = 10n;
console.log(typeof n);
console.log(typeof n1);


// String
const username = "Sneha";
const str1 = 'Hello ' + username;
const str2 = "Hello " + username;
console.log(str1);
console.log(str2);

// template strings
const str3 = `
<div>
    Hello ${username}
    ${4+5}
    ${Math.random()}
</div>
`;

console.log(str3);

// Boolean
const a = true;
const b = false;
console.log(a);
console.log(b);

console.log(typeof a);

// null
const x1 = null;
console.log(x1);

// undefined
let y;
console.log(y);
y = undefined;
console.log(y);

console.log(typeof x1);
console.log(typeof y);