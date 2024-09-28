console.log(Math);

// const PI = Math.PI;
// const E = Math.E;
// const sqrt = Math.sqrt;

// object destructuring
const { PI, E, sqrt } = Math;

console.log(PI);
console.log(E);
console.log(sqrt(9));

const testUser1 = {
    id: 1,
    name: 'Sneha',
    age: 21,
    marks: 90
};

const testUser2 = {
    id: 2,
    name: 'Sanjay',
    age: 20
};

// default value
// const { name, age, marks } = testUser1;
// const { name, age, marks } = testUser2;

// Default property can be used
const { name, age, marks=0 } = testUser2;
console.log(name);
console.log(age);
console.log(marks);

const circle1 = {
    name: "CircleX",
    radius: 2
};

const circle2 = {
    name: "CircleY",
    radius: 4
};

const circleArea = (radius) => {
    return PI * radius* radius;
}

console.log(circleArea(circle1.radius));
console.log(circleArea(circle2.radius));

// Now the customer want the value to be displayed as Circlename : Area

const circleArea1 = (radius, name) => {
    return `${name}: ${PI * radius* radius}`;
}

console.log(circleArea1(circle1.radius));
console.log(circleArea1(circle2.radius));

console.log(circleArea1(circle1.radius, circle1.name));
console.log(circleArea1(circle2.radius, circle2.name));

// Imagine the use of this formula in more than 20 to 50 places.
// We can avoid the mistakes by using destructuring.
const circleArea2 = ({radius, name}) => {
    return `${name}: ${PI * radius* radius}`;
}
console.log(circleArea2(circle1));
console.log(circleArea2(circle2));

// So now if we modify the class the function call won't change

const circle3 = {
    name: "CircleX",
    radius: 2,
    precision: 4
};

const circleArea3 = ({radius, name, precision}) => {
    return `${name}: ${(PI * radius* radius).toFixed(precision)}`;
}
console.log(circleArea3(circle1));
console.log(circleArea3(circle2));
console.log(circleArea3(circle3));

console.log('-------Array destructuring-------');
const arr = [1, 2, 3, 4];
// const first = arr[0];
// const second = arr[1];

// const [first, second] = arr;
// console.log(first, second);
// console.log(arr);

// const [first, second, , fourth] = arr;
// console.log(first, second, fourth);

// ... => rest/spread operator
// when ... are used on the left hand side of assignment operator it is called as rest operator
// when ... are used on the right hand side of assignment operator it is called as spread operator

console.log("************Rest Operator***************");

const [first, second, ...restOfEl] = arr;   // rest element should be at the last in destructuring
console.log(first, second);
console.log(restOfEl);

const testObj = {
    temp1: 10,
    temp2: 20,
    name: 'Sneha',
    temp3: 30,
    age: 30,
    rollNo: 2
};

const { temp1, temp2, temp3, ...person } = testObj;
console.log(person);

function fun1(val1, ...args) {
    console.log(val1);
    console.log(args);
}

fun1(10, 20, 30, 40);

console.log("***** Spread Operator ********");

const stud = person; // this is a reference of the person.
console.log(person);
console.log(stud);

stud.age=35;

console.log('student', stud);
console.log('person', person);


// to create a copy or clone use spread
const stud1 = {
    ...person
};
stud1.age=35;

console.log('student', stud1);
console.log('person', person);

const stud2 = {
    ...person,
    gender: "Female", //add new property
    name: "Ragini" // override the existing property
};
console.log('student', stud2);

console.log("********* Spread with Arrays *******");

const arr1 = [20, 30];
const arr2 = [...arr1];
arr2[1] = 40;
console.log('arr1', arr1);
console.log('arr2', arr2);

const arr3 = [40, 50];
const arr4 = [10, ...arr1, 35, ...arr3, 60];
console.log(arr4);
