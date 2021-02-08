const person = {
    firstName: 'Dave',
    lastName: 'Santos',
    age: 19,
    email: 'dave@gmail.com',
    hobbies: ['eating', 'playing oline'],
    address: {
        city: 'San Leonardo',
        street: 'Nagano'
    },
    getBirthYear: function() {
        return 2021 - this.age;
    }
};

// let value;

// value = person;

// value = person.firstName;
// value = person.age;
// value = person.hobbies[1];
// value = person.address.street;
// value = person.address.city;
// value = person.getBirthYear();

// console.log(value);

const people = [{name: 'Dave', age: '19'}, {name: 'Yesha', age: '6'}, {name: 'Kc', age: '23'}];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}
