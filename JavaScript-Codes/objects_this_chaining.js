function makeUser(name, age) {
    return {
        name,           // name: name --> shorthand property syntax
        age
    };
}

const user1 = makeUser("Sneha", 30);
console.log('user1', user1);

// Using IN operator to check if a key/property exists in the object or not

console.log("name in user1 ===> ", "name" in user1);

const user2 = {};
console.log("name in user2 ===> ", "name" in user2);

const user3 = {name: undefined};

console.log("user2.name === undefined", user2.name === undefined);

console.log("user3.name === undefined", user3.name === undefined);

console.log("name in user3 ===> ", "name" in user3);

// This Keyword
console.log(this);

function sayHi() {
    console.log('sayHi', this);
}
sayHi();

const sayHello = () => {
    console.log('sayHello', this);
}
sayHello();

// The this keyword will always point to the context from where the function is invoked.

const user={
    name: "Sneha",
    age: "30", 
    sayHi: function(){console.log("sayHi in user", this);},
    // the function call will print the object who is calling sayHi function
    sayHello: ()=>{console.log("sayHello in user", this);}
    // there is no this in arrow functions
};
user.sayHi();
user.sayHello();

// Arrow function behaviour in detail
const group = {
    title: 'Mr',
    userNames: ["Ashish", "Bhargav", "Jigar", "Lucky"],
    showUsers: function(){
        this.userNames.forEach(function(name){
            console.log(this.title + " " + name);
            // console.log(this);
        });

        // Use arrow function inside forEach to refer to the parent this object
        this.userNames.forEach((name)=>{
            console.log(this.title + " " + name);
        });
    }
};
group.showUsers();

// Object Chaining concept in detail
let u1 = {
    address: {
        city: 'Mumbai'
    }
};

// let u2 = {};
// console.log(u2.address.city);
// Will give an error

// let u2 = undefined;
// console.log(u2.address.city);
// Will give an error

let u2 = null;
// console.log(u2.address.city);
// Will give an error

// ?. -> if the value before ?. is undefined/null, then it will not try to access it's property
console.log(u2?.address?.city);