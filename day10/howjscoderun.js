// console.log(x); // ye error nhi pr undefined dega
// console.log(y); //error dega kyuki y ko let liya hai

// var x=10;
// let y=20; 

var x1=20;
let y1= 10;
// console.log(z);   // z is not defined: ye waali error dega
console.log(x1);
console.log(y1); 

// hoisting in js is a behaviour where variable and function declaration are moved to the top of their containing scope during the compilation phase, before the code has been executed
// this means that js hoist or lifts the declaration (but not the assignments) to the top ,so you can refer to them before they are written in the code,however only the declaration are hoisted,not the assignment of variable or initialisations.

//After Hoisting the above code will be looking like this
//host hote time var datatype wale ke andar automatically undefined chla jaata hai isiliye jb var type ke variable ko declare krne se phle print kraya toh usne error nhi diya
var x = undefined;
let y;

console.log(x);
console.log(y); 
x=20;
y= 10;







































































