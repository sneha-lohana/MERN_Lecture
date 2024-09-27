setTimeout(()=> {
    console.log("After 2 seconds");
}, 500);
console.log("Done!");

// How to check the time taken to execute if there is a  blocking code
console.time('timer1');
setTimeout(() => {
    console.log('After 2 seconds');
}, 500);

// Blocking Code
for (let i=1; i< 1e9; i++) {}

console.log('Done!');
console.timeEnd('timer1');

// Clear timer to remove the previous time out
// setTimeout() function returns number ie timerId
const timerId = setTimeout(() => {
    console.log('hello');
}, 4000);

setTimeout(() => {
    clearTimeout(timerId);
    console.log("Timer Cleared");
}, 2000);

// Perform a task continously after some interval

const id = setInterval(() => {
    console.log("Hello");
}, 1000);

setTimeout(()=>{clearTimeout(id)}, 5000);

