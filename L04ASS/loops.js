// for loops

for(let i = 0; i < 10; i++) {
    if(i ===2) {
        console.log('2pamore');
        continue;
    }
    if(i === 5) {
        console.log('stop');
        break;
    }

    console.log(`numner ${i}`);
}
// while loops

let i = 0;

while(i< 10) {
    console.log(`number ${i}`);
    i++;
}

// do while
do {
    console.log(`num ${i}`);
    i++;
}
while (i < 10);

//loop through array
const cars = ['Ferrari', 'muztang', 'chevy', 'ford'];

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// foreach
cars.forEach(function(car, index , array) {
    console.log(`${index} : ${car}`);
    console.log(`${array}`);
});

// map
const users = [{id: 1, name: 'dave'}, {id: 2, name: 'carlo'}, {id: 3, name: 'yesha'}, {id: 4, name: 'kc'}];
const ids = users.map(function(user) {
    return user.name;
});
console.log(ids);

// for inn loop
const user = {
    firstName: 'Dave',
    lastName: 'Santos',
    age: 22
};

for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}