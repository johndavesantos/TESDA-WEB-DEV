let value;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

value = listItem;
value = list;


// get child nodes
value = list.childNodes; 
value = list.childNodes[0]; 
value = list.childNodes[0].nodeName;
value = list.childNodes[0].nodeType

// 1- element
// 2- attribute(deprecated)
// 3- text node
// 8- comment
// 9- Document it self
// 10- Doctype

// get children element nodes

value = list.children;
value = list.children[0];
list.children[0].textContent = ('Hi');


console.log(value);
