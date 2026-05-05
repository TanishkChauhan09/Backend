"use strict";
let num = 10;
// num = "Rohan"; //error
let x = 10;
x = 20;
let val = "Rohan";
let money; // or let money:any;
money = "Rohan";
console.log(money.toUpperCase());
let val2;
val2 = "Rohan";
val2 = 20;
// if(typeof val2 == 'string')
// console.log(val2.toUpperCase());
// if(typeof val2 == 'number')
// console.log(val2.toFixed(2));
// Non-Primitive
let arr = [2, 3, 5, 4, 6, 7];
let arr2 = [23, 34, 65, 88, 97]; // hover on arr2
let arr3 = [45, 65, 78, 98, "hello"];
// or let arr3:(string | number)[] = [45,65,78,98,"hello"]; '|' is a sign of union
// arr3.push(true); //error because arr is only of number&string type
let arr4 = [67, "hello", "true"];
// tuples -> array of fixed no. of elements of specific type 
// let tuple1:[string,number] = [90,"Rohan"];  // error dega phle string type ki hi value aani chahiye
let tuple1 = ["Rohan", 90];
