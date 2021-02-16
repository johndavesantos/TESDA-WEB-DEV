//Object literal
// const person = {
//     name: 'dave'
// };

// console.log(person);


//Person constructor
// function Person(){
//     this.name = 'john'
// };

// const john = new Person();

// console.log(john);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// };

// const yesha = new Person('yesha', 19);
// const santos = new Person('santos', 20);

// console.log(yesha);
// console.log(santos);


//Constructor and This Keyword
//Person constructor
function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

const dave = new Person('Dave', '05/18/01');
const john = new Person('John', '09/29/01');

console.log(dave);
console.log(john);
console.log(dave.calculateAge());
console.log(john.calculateAge());