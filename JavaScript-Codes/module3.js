const a = 10;

function sayHi() {
    console.log('Hi');
}

function sayHello() {
    console.log('Hello');
}

const PI = Math.PI;

export { sayHi, sayHello, PI };

export default class User { // in entire file, you can only export default once
    constructor(name) {
        this.name = name;
    }
}