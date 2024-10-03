function User(name) {
    this.name = name;
    this.sayHi = function() {
        console.log('Hi ' + this.name);
    }
}
// constructor function
// 1. a new empty object is created and assigned to this
// 2. add properties to this
// 3. the value this is returned

const user = new User('Sneha');
console.log(user);
user.sayHi();

let user1 = {
    name: 'Pranit',
    sayHi: function() {
        console.log('Hi ' + this.name);
    }
};
console.log(user1);
user1.sayHi();


function MyUser() {
    this.name = 'MyName';

    return { age: 20 }; // if you return an object, then this will be discarded
}
let myUser = new MyUser();
console.log('myUser', myUser);

function MyUser1() {
    this.name = 'MyName1';

    return 1; // if you return any primitive value, then this object will be returned
}
let myUser1 = new MyUser1();
console.log('myUser1', myUser1);

console.log(typeof User);   // function
