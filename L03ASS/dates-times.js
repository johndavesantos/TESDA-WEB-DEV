let val;

const today = new Date();
let birthday = new Date('05-18-2001 11:25:00');
birthday = new Date('12/25/10');

val = today.getHours();
val = today.getFullYear(); 
val = today.getMonth();
val = today.getDate();
val = today.getMilliseconds();

birthday.setMonth(3);
birthday.setDate(12);
birthday.setFullYear(2008);
birthday.setHours(8);
birthday.setMinutes(18);


console.log(birthday);
