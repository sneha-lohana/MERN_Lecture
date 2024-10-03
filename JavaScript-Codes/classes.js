class User {
    age = 10;   // modern feature, some browsers may not support this feature
    constructor(n) {
        this.name = n;
    }

    sayHi() {
        console.log('Hi ' + this.name);
    }
}

let user = new User('Pranit');
console.log(user.name);
console.log(user.age);
user.sayHi();

console.log(typeof User);   

// 1. first it creates a function with the name of class (User in this case)
// 2. constructor method becomes the body of your new function
// 3. SayHi method is actually storded inside User.prototype

console.log(user);
user.sayHi();

function User1(name) {
    this.name = name;
    this.sayHi = function() {
        console.log('Hi ' + this.name);
    }
}

let user1 = new User1('Pranit');
console.log('user1', user1);
