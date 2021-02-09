// window methods / object / properties

// alert
// alert('Hello Bro');

// // prompt
// const input = prompt();
// alert(input);

// confirm
// if(confirm('Are you sure?')){
//   console.log('Yes');
// }else {
//   console.log('No');
// }

// 
let value;

// outter height and width
value = window.outerHeight;
value = window.outerWidth;
// inner height and width
value = window.innerHeight;
value = window.innerWidth;

// scroll points
value = window.scrollY;
value = window.scrollX;

// location object
value = window.location;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;
value = window.location.search;

// redirect 
// value = window.location.href = 'https://www.google.com/';
// reload
// window.location.reload();

// navigation object
value = window.navigator.appName;
value = window.navigator.appVersion;
value = window.navigator.userAgent;
value = window.navigator.platform;
value = window.navigator.vendor;
value = window.navigator.language;

console.log(value);