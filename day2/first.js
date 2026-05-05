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

console.log(typeof null);
//null == undefined  //true
//null === undefined //false
console.log(null==undefined);
//isme phle type dekhega toh null ka type object hai aur uska toh undefined hoga so yahin false ho rha hai isiliye ye false dega
console.log(null===undefined);
console.log(typeof null);
//isme null sirf undefined ke equivalent hota hai isiliye 0 ke saath false diya
console.log(null==0);
//baaki inme type conversion hoga fir check hoga
console.log(null<0);
console.log(null>0);
console.log(null<=0);
console.log(null>=0);
//undefined
console.log(undefined==0);
console.log(undefined<0);
console.log(undefined>0);
console.log(undefined<=0);
console.log(undefined>=0);

console.log(NaN==NaN);
//why so let's see example
let str2="rohan";
let str3="sohan";
console.log(Number(str2)==Number(str3));//NaN==NaN //false deta hai 
console.log(Number(str2));
console.log(NaN===NaN);
console.log(typeof null);

let abc1=123;
let abc2="123";
let abc3=123;
console.log(abc1==abc2==abc3);// true==abc3 so false

let abc4=123;
let abc5="123";
let abc6=true;
console.log(abc4==abc5==abc6);//true dega


