let num:number = 10;
// num = "Rohan"; //error

let x = 10;
x = 20;
let val = "Rohan";

let money; // or let money:any;
money = "Rohan";
console.log(money.toUpperCase());


let val2:unknown;
val2 = "Rohan";
val2 = 20;

// if(typeof val2 == 'string')
// console.log(val2.toUpperCase());

// if(typeof val2 == 'number')
// console.log(val2.toFixed(2));


// Non-Primitive

let arr:number[] = [2,3,5,4,6,7];
let arr2 = [23,34,65,88,97]; // hover on arr2

let arr3 = [45,65,78,98,"hello"];
// or let arr3:(string | number)[] = [45,65,78,98,"hello"]; '|' is a sign of union
// arr3.push(true); //error because arr is only of number&string type

let arr4:(string|number|boolean)[] = [67,"hello","true"];

// tuples -> array of fixed no. of elements of specific type 
// let tuple1:[string,number] = [90,"Rohan"];  // error dega phle string type ki hi value aani chahiye
let tuple1:[string,number] = ["Rohan",90];

// objects ,inline
let obj:{name:string,age:number,gender:string} = {
    name:"Rohan",
    age:20,
    gender:"Male"
}

let person:{name:string,age:number,balance:number};

person = {
    name:"Rohan",
    age:25,
    balance:420
}

type customer ={
    name:string,
    age:number,
    id:number
}

let c1:customer = {
    name:"rohan",
    age:26,
    id:4353465
}
interface admin{
    name:string,
    age:number
}

interface admin{
    position:string
}

let c2:admin = {
    name:"rohan",
    age:28,
    position:"manager"
}











