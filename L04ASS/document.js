let value;
value = document;
value = document.all[1];
value = document.all.length;
value = document.head;
value = document.body;
value = document.doctype;
value = document.domain;
value = document.URL;
value = document.characterSet;
value = document.contentType;


value = document.forms;
value = document.forms[0].id;
value = document.forms[0].method;
value = document.forms[0].action;

value = document.links;
value = document.links[1];
value = document.links[2].id;
value = document.links[0].className;
value = document.links[0].classList;

value = document.images;
value = document.scripts;
// value = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArray = Array.from(scripts);

console.log(scriptsArray);

scriptsArray.forEach(function(script) {
    console.log(script.getAttribute('src'));
})