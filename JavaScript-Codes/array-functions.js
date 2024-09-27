// Loop the array using forEach function
const arr = [1, 2, 3, 4, 5];

// Call Back function
const cb = function(value, index, array){
    console.log('cb', value);
};
arr.forEach(cb);

console.log("using anonymous function");
arr.forEach(function(value){
    console.log('value', value);
})

console.log("using arrow function");
arr.forEach((value)=>console.log('cb', value));

// Filter Function in array
const evenArr = [];
for (let i=0; i<arr.length; i++){
    if (arr[i] %2 === 0){
        evenArr.push(arr[i]);
    }
}
console.log('Array of even numbers ----> ', evenArr);

console.log("Even number using filter function and anoymous call back function");

const evenArr1 = arr.filter(function(value){
    return value%2===0;
});
console.log('Array of even numbers ----> ', evenArr1);


console.log("Even number using filter function and arrow call back function");
const evenArr2 = arr.filter(value=>value%2===0);
console.log('Array of even numbers ----> ', evenArr2);

// Creating array of objects
const products = [
    {
        id: 1,
        name: 'iPhone',
        price: 50000
    },
    {
        id: 2,
        name: 'Pixel',
        price: 25000
    },
    {
        id: 3,
        name: 'Samsung',
        price: 45000
    }
];
console.log(products);

// Write a arrow function to find out the products having price greater that 40000

const filteredProducts = products.filter(product => product.price > 40000);
console.log(filteredProducts);

// Map function is arrays
const result = arr.map(value => value* value);
console.log("maps = result = ", result);

// Find Function
// Finds the first matching element
const prod = products.find(product => product.id === 2);

console.log(prod);

console.log(products.find(p=>p.price>40000));