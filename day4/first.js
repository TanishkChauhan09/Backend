//Maths in JS
// console.log(Math.E);
// console.log(Math.LN10); 
// console.log(Math.LOG10E);

// 0<=value<1
console.log(Math.random());
//0-9 (do multiply by 10 for this)
console.log(Math.random()*10); 
//ab upar wale ka complete floor le lunga
console.log(Math.floor(Math.random()*10));

//floor and ceil 
// let num = 43.2;
// console.log(Math.ceil(num));
// console.log(Math.floor(num));

//1-10 random value generate ke liye
console.log(Math.ceil(Math.random()*10));//or ab ise floor se bhi kr skte hai hai bss +1 krna hoga 0-9 tk generate krne wale me
console.log(Math.floor(Math.random()*10+1));

//11-20(0-9, +11 krunga)
console.log(Math.floor(Math.random()*10)+11);


//min=40, max=50(40-50)
let min=40;
let max=50;
console.log(Math.floor(Math.random()*(max-min+1)+min));
console.log(Math.ceil(Math.random()*(50-40+1)+40)); 

//ludo(1-6)ke liye
console.log(Math.floor(Math.random()*(6-1+1)+1));