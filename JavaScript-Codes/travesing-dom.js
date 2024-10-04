// Add the unorderlist

console.log(document.body);

for (let index = 0; index < document.body.childNodes.length; index++) {
    console.log(document.body.childNodes[index]);
}

console.log('Displaying specific child');

// childNodes will give you all nodes including elements, textnode, commentnode
console.log("document.body.childNodes[0] ===> ", document.body.childNodes[0]);   // children - to get all child elements
console.log("document.body.firstChild ===> ",document.body.firstChild);  // firstElementChild - to get only first element, not node
console.log("document.body.childNodes[document.body.childNodes.length - 1]==> ", document.body.childNodes[document.body.childNodes.length - 1]);
console.log("document.body.lastChild===> ", document.body.lastChild);  // lastElementChild

// childNodes is not an array, it's a collection/iterable. You cannot use array functions like filter, map, etc.
for (const node of document.body.childNodes) {  // children
    console.log(node);
}

// convert iterable to array using Array.from() function
const nodes = Array.from(document.body.childNodes);

console.log('parent of body', document.body.parentNode);    // parentElementNode
console.log('nextSibling of head', document.head.nextSibling);    // nextElementSibling
console.log('nextElementSibling of head', document.head.nextElementSibling);
console.log('previousSibling of body', document.body.previousSibling);  // previousElementSibling

// Ways to Manipulate HTML: Using getElementByID, getElementByClassName, getElementByTag and also QuerySelector
// Add ul and div tags with class and id name as menu (19 to 27 line number in index.html)
console.warn('------querySelector-----');
// querySelector supports css type selector
console.log(document.querySelector('#menu'));   // select first element by id
console.log(document.querySelectorAll('#menu'));    // select all elements by id
console.log(document.querySelector('.menu-item'));  // select first element by class
console.log(document.querySelectorAll('.menu-item'));   // select all elements by class
console.log(document.querySelector('li'));      // select first element by tag name
console.log(document.querySelectorAll('li'));   // select all elements by tag name
console.log(document.querySelectorAll('li.menu-item')); // select all elements by li tag having menu-item as class