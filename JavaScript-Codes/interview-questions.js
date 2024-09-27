// What will be the output.

let fruits = [];
fruits[12] = "Orange";
console.log(fruits.length);

// What will be output
const arr = [1, 2, 3];
console.log(arr.length);
arr.length = 6; // if you increase the length, the array will increase making rest of the values as empty
console.log(arr);
arr.length = 2; // if you decrease the length, the array will truncate
console.log(arr);