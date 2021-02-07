// create some arrays

const numbers = [5, 18 , 9, 29 , 4, 7];
const numbers2 = new Array (10, 6, 11, 23, 99);
const snacks = ['bread', 'burger', 'fries', 'flout'];
const mixed = [25, 'Hi', true, undefined, null, {a: 5, b: 8}];

let value;

// // get array length
// value = numbers.length;
// // check if as array
// value = Array.isArray(numbers);
// // get single value
// value = numbers[3];
// value = numbers[0];

// // insert into array
// numbers[3] = 100;

// // find index of value 
// value = numbers.indexOf(18);

// // mutating arrays
// // add on to end
// numbers.push(199);
// // add on to front
// numbers.unshift(192);
// // take off from end
// numbers.pop();
// // take off from front
// numbers.shift();
// splice value
// numbers.splice(0, 3);
// // reverse
// numbers.reverse();

// // concatenate array
// value = numbers.concat(numbers2);
// // sorting arrays
value = snacks.sort();
value = numbers.sort();
// use the compare function
value = numbers.sort(function(x, y) {
    return x - y;
});
// reverse sort
value = numbers.sort(function(x, y) {
    return y - x;
});

// find
function over20(num) {
    return num < 20;
}

value = numbers.find(over20);
console.log(value);