let value;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// /childnodesPart2
//Children of children
value = list.children;
list.children[3].children[0].id = 'test-link';
value = list.children[3].children[0];
//First Child
value = list.firstChild;
value = list.firstElementChild;
//Last Child
value = list.lastChild;
value = list.lastElementChild;
//Count child elements
value = list.childElementCount;
value = list.children[0].childElementCount;
//Get parent node
value = listItem.parentNode;
value = listItem.parentElement;
value = listItem.parentElement.parentElement;
//Get next siblings
value = listItem.nextSibling;
value = listItem.nextElementSibling;
value = listItem.nextElementSibling.nextElementSibling;
previousElementSibling;
//Get previous sibling
value = listItem.previousSibling;
value = listItem.previousElementSibling;
console.log(value);