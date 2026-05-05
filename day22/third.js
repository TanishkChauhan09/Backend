// js is a single threaded(ek baar me ek hi task hoga) synchronous(synchronised way ek ke baad ek) language:

// JS behaviour : Asynchronous bhi hota hai 
// ye asynchronous task hai
// console.log("10");
// setTimeout(() => {
//     console.log("20");
// }, 2000); isko aise bhi krskta hoon
 
// console.log("30");
// 10 30 20


// ab ye synchronous task hai
console.log("10");
const timer = Date.now();
while(Date.now()-timer<2000)
{
    // wait for 2 second
}

console.log("20");
console.log("30");
// 10 20 30 