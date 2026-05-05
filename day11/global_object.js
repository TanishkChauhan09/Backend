//global object: type of global object object hoga->jaise c++ me libraries se cheeje aati hai waise hi js me ye sbhi 
//jaise setInterval,new Onbject() ye sbhi global object se aati hai
// chrome Browser: window
// Nodejs:global  
// global object irrespective of environment ke liye: this keyword use krenge
// toh this ek eyword hai jo ki global object ko point kr rhai irrespective of environment

global.console.log("Hello kaise ho"); 
// const a = 20;
// console.log(a );
// console.log(global.a); //undefined



// console.log('Hello kaise ho');
// console.log(Math.random());
// console.log(global.Math.random());
// console.log(globalThis.Math.random());

//setInterval();
// if i write Math.random(),it generates random number also if we write window.math.random() ye bhi random number generate kr dega

let obj = {
    name:'rohan',
    age:27
}
// console.log(obj.name);
// i can also print obj using global keyword which works in nodejs as a global object
// console.log(global.obj);
// also if i write 
// console.log(global.obj.age); // Cannot read properties of undefined (reading 'name') kyuki global khud ek object hai toh object_name.property hi to use kr skte hai ek saath do object ki keys se access nhi kr skta 
// toh hmm vs code use kr rhe hai so yha hmare nodejs aas a globalobject global hai, isiliye global use krenge
// pr inspect of google chrome me hmm window use kr rhe honge

 // console.log(global);

// ab baar baar hmm har kisi browser ke kiye uske gobal object ko yaad rkh ke use krna thoda muskil hojayega so
// ek universal keyword bna diya hai jo hai 'globalThis' keyword

// console.log(Math.random());
// console.log(global.Math.random());
// console.log(this.Math.random()); //this nhi globalThis use krenge global ke place pr

// this keyword(alsg hai globalThis se) in JS is a special keyword that refers to the
// context in which the current code is being executed.
// Its value depends on how the function where yhis is used is called.






























































































