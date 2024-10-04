// Add a Index2.html with body id="page1" something="non-standard" and script tag

// we can add our own custom data to any dom element
document.body.myData = {
    name: 'abc'
};
console.log("document.body.myData ===> ", document.body.myData);

// we can also add our own function to any dom element
document.body.sayHi = () => {
    console.log('Hi');
}

console.log("document.body.id==>",document.body.id);  // page1
// non-standard attributes does not yield any property in DOM
console.log("document.body.something ==> ",document.body.something);   // undefined

// Standard & Non-standard attributes can be retrieved using following functions:
// hasAttribute(name) - checks whether attribute exists or not
// getAttribute(name) - get the value of attribute name
// setAttribute(name, value) - set the value of attribute name
// removeAttribute(name) - remove the attribute name

console.log("document.body.hasAttribute('id') ==> ", document.body.hasAttribute('id'));  // true
console.log("document.body.hasAttribute('something')==> ",document.body.hasAttribute('something'));  // true
console.log("document.body.getAttribute('something')==> ",document.body.getAttribute('something'));  // non-standard

// Add div in index2.html
// DOM properties are typed
const myDiv = document.getElementById('my-div');
console.log("myDiv.style==> ", myDiv.style);
console.log("myDiv.getAttribute('style')", myDiv.getAttribute('style'));

// Checkbox to index2.html
const myInput = document.getElementById('my-input');
console.log(myInput.checked);
console.log(myInput.getAttribute('checked'));

// Modifying the HTML content
// Add <ul id="message-container">
// creating element
const liEl = document.createElement('li');
liEl.innerHTML = 'hi';
liEl.style.color = 'red';

console.log(liEl);

const messageContainer = document.getElementById('message-container');
// adds the element at the end of container element
messageContainer.append(liEl);

const liEl1 = document.createElement('li');
liEl1.innerHTML = 'hello';
liEl1.style.color = 'red';
// adds the element at the start of container element
messageContainer.prepend(liEl1);

const divEl = document.createElement('div');
divEl.innerHTML = 'before';
// adds the element before the container element
messageContainer.before(divEl);

const divEl1 = document.createElement('div');
divEl1.innerHTML = 'after';
// adds the element after the container element
messageContainer.after(divEl1);

// Remove the content from the website
setTimeout(() => {
    // removes the element
    divEl1.remove();
}, 2000);
