//Date in JS

// const d = new Date(203980502340);
// const d1 = new Date();
// console.log(d.toDateString());
// console.log(d.toString());
// console.log(d.toISOString());
// console.log(typeof d);
// console.log(d);
// console.log(d1);
// console.log(d1.getDate());
// console.log(d1.getDay());
//Sun, Mon, Tue, Wed, Thu, Fri, Sat
//0     1    2    3    4    5     6
// console.log(d1.getMonth());
//Jan, Feb, Mar, Apr, May
//0     1    2    3    4
// console.log(d1.getFullYear());
// console.log(d1.getMilliseconds());
// console.log(d1.getMinutes());

// console.log(d1.getTime());

// const now = Date.now();
// console.log(now);

//Number : 0 based start honge
//string : 1 based start honge

//new Date(year,month,day,hours,minutes,seconds,milliseconds)
// const d1 = new Date("2024-10-16T10:52:10");
// const date = new Date(2024,4,28,11,0,0,231);
// console.log(date);
// console.log(date.toString());

//Setting date components

// const d = new Date();
// d.setDate(20);
// d.setFullYear(2024);
// d.setMonth(3);
// console.log(d.toString());
// console.log(d.toLocaleTimeString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleString());

//Date Calclations

// const date1 = new Date();
// const date2 = new Date("2024-04-21");
// console.log(date2-date1);
// console.log(date2>date1);
// console.log(date2<date1);
// console.log(date2===date1);

//Countdown Timer for olympics
// Days, hour, minute, second
const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");
const date = date2-date1;
console.log(date);
const days = Math.floor(date/(1000*60*60*24));
const hour = Math.floor((date/(1000*60*60))%24);
const minute = Math.floor((date/(1000*60))%60);
const second = Math.floor((date/(1000))%60);
console.log(`Countdown timer for olympics: Days:${days} hour:${hour} minute:${minute} second:${second}`);