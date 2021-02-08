// function declaration
function greet(firstName = 'Dave', lastName = 'Santos') {
    if(typeof firstName === 'undefined') {
        firstName = 'Dave';
    }
    if(typeof lastName === 'undefined') {
        lastName = 'Dave';
    }
    console.log('Hi');
    return `Hi ${firstName} ${lastName}`;
}
console.log(greet());

// function expressions
const square = function(x){
    return x * x;
}
console.log(square(10));
//  immidiatley incikable  function expressions - iifes
 (function(name) {
     console.log(`Name ${name}`)
 })('Dave');

//  property methods
const todo = {
    add: function() {
        console.log('Add');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
}
todo.delete= function() {
    console.log('Delete todo...');
}

todo.add();
todo.edit(100);
todo.delete();