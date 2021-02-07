const firstName = 'John Dave';
const lastName = 'Santos';
const age = 19;
const str = 'Hello Guys im John Dave';
const tags = 'Web Dev, Web Design, Programming';

let val;

val = firstName + lastName;

// concatenation 
val = firstName + ' ' + lastName;

// append
val = 'Dave';
val += 'John';

val = ' Hi, my name is ' + firstName + ' and i am ' + age;

// escaping
val = "That's awesome";
// lengt
val = firstName.length;
// concat
val = firstName.concat(' ',lastName);
// change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();
val = firstName[5];

// indexof()
val = firstName.indexOf('n');
val = firstName.lastIndexOf('J');

// chartAt()
val = firstName.charAt('5');

// substring()
val = firstName.substring(0, 6);

// slice()
val = firstName.slice(0,6);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = str.split(',');

// replace()
val = str.replace('John Dave', 'Yesha Colleen');
console.log(val);