const name = 'Dave';
const age = '19';
const job = 'Web developer';
const city = 'San Leonardo';
let html;

// without templete string (es5)

// html = '<ul><li>Name: ' +
// name +
// '</li><li>Age: ' +
// age +
// '</li><li>Job: ' +
// job +
// '</li><li>City: ' +
// city +
// ' </li> </ul>';

// with templete strings (es6)
// function declaration;
function hello() {
    return 'HI Everyone';
}
// ternary operator
html = `
    <ul>      
     <li>Name: ${name}</li>
     <li>Age: ${age}</li>
     <li>Job: ${job}</li>
     <li>City: ${city}</li>
     <li>${9 + 9}</li>
     <li>${hello()}</li>
     <li>${age > 20 ? 'Over 20' : 'Under 20'}</li>
    </ul>
    `;
     
document.body.innerHTML = html;