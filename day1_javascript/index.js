console.log("hello sbhi log");
console.log(3+4);
console.log(5+4);

// let const var
let a=20;
console.log(a);

//let me ek baar assign ke baad change kr skta hoon 
//ley aur var dono kaa kaam toh same hai but let ek modern tarika hai
let my_name="Mohan";
my_name="Rohan"
console.log(my_name);

//const me ek baar assign ke baad ussse change nhi kr skta hoon
const b=10;
console.log(b);

//var ek older tarika hai so ise abhi use nhi krenge
var h=40;
h=50;
console.log(h);

//ARRAY IN JS
let arr=[2,4,6,"Hello","kaise","ho"]
console.log(arr);
console.log(typeof arr);

//OBJECT IN JS
//YHA OBJECT KO HMNE EK VARIABLE ME ASSIGN KRA RKHA HAI
let obj={
    user_name:"Rohan",
    Password:4857354935,
    Balance:3984578348062,
    user_id:"hunter_07"
}
console.log(obj);
console.log(typeof obj);

let obj1={Name:"Rohan",Password:48731064,Address:"xyz address"};
console.log(obj1);

//FUNCTION IN JS
let fun=function(){
    console.log("Hello kaise ho sbhi");
    return 10;
}
fun();
console.log(typeof fun);
console.log(fun());

//TYPE CONVERSION
let account_number="100";
//string convert into number
let num=Number(account_number);
console.log(num);
console.log(typeof num);
console.log(typeof account_number);
//boolean convert into number
let x = true;
console.log(Number(x));

//NaN(Not a Number)
let account="100xs";
console.log(Number(account));

//null
let x1=null;
console.log(Number(x1));
//undefined
let x2;
console.log(Number(x2));

//convert in string
let ab = 20;
console.log(String(ab));
console.log(typeof ab);
console.log(typeof String(ab));
//space 
let abc = " ";
console.log(Boolean(abc));
//not a space

let abc1 = "";
console.log(Boolean(abc1));

//Operators
console.log(((6*(3+18))/6)-9);
//divide multiply left ot right
//add sub left to right

//modulus(%) gives us remainder
console.log(40%3);
//pre(phle value increase hogi phir use hogi),post(phle value use hogi phir value increase hogi) increment
let sum=30;
console.log(sum++);
console.log(++sum);

let q=30;
q+=20;
console.log(q);

let q1=30;
q1-=20;
console.log(q1);

let q2=30;
q2/=20;
console.log(q2);

let q3=30;
q3*=20;
console.log(q3);

let q4=30;
q4%=20;
console.log(q4);

//comparision operators
// let w=40;
// let w1=30;
// console.log(w==w1);
// console.log(w===w1);
// console.log(w!=w1);
// console.log(w>w1);
// console.log(w<w1);
// console.log(w>=w1);
// console.log(w<=w1);

let num1 = 10;
let str = "10";
console.log(num1==str);//true(JS khud string ka type conversion krke ussse check kr rha hai)

//type conversion hoga string to number
let num2 = 10;
let str1 = "20";
// console.log(num2==str1);
// console.log(num2<str1);

//=== ye type ko bhi check krega then, compare krega 
console.log(num2===str1);

//Logical operators
let e=20;
e1=20;
if(e<e1 && e!=e1)
    console.log(true);
else
console.log(false);

if(e1>= e || e!=e1)
    console.log(true);
else
console.log(false);




