console.log("a =", a);
var a = 10;
console.log("a =", a);

// variables with let are hoisted but they are not yet defined (temporal deadzone)
// console.log(b);
let b = 10;
console.log(b);

// convention for writing variable names
const userName = 'Pranit';  // use camel-case
const _userName = 'Pranit'; // _ is allowed
const $userName = 'Pranit'; // $ is allowed
const _ = 'Pranit';
const $ = 'Pranit';
const image1 = 'image.jpg'; // can include numbers
// const 1image = 'image.jpg';  // cannot start with number
// const image-name = '';   // no special character apart from _ and $ is allowed