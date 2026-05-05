//1.) this keyword(alsg hai globalThis se) in JS is a special keyword that refers to the
// context in which the current code is being executed.
// Its value depends on how the function where yhis is used is called.

// iska koi specific/fixed task nhi hai ye envoronment ke according alag-alag behave krta hai
// this keyword hmaare global scope me global object ko point krta hai global object environment ke according kuch bhi hoskta hai

// console.log(20); //ye mujhe html file jo iss se link hai uske inspect ke console me page refresh krunga tb isko m wha pr dekh skta hoon

// ye a,b mere global scope ka to part bnn jayenge
// aur ye b mere global object ka part bnega jo hai var type ka 
// let a = 10;
// let b = 20;
// var c = 30;
// console.log(this==window); 
// console.log(this.a); //error dega kyuki a let global scope ka part hai global scope ka nhi
// console.log(this.c); //ye usi place pr shi se run hojayega

//1: Global context (outside any function)
//In browsers : window
//In Node.js : Module's exports object

// console.log(this); //(this will print empty object in NODE.JS) online hme window ke respect me information milti hai ke wo global context ko point krega

//2.Inside a function

//i:(Non-Strict Mode)
//Non-strict mode mere global object ko hi point krti hai
// when this is used inside a regular function,it refers to the global object 
// function greet(){
//     console.log(this);
// }
// greet();

// a = 20;
// console.log(a);


//ii:(Strict Mode)
// this will be undefined inside a function

"use strict"
// function greet(){
//     console.log(this);
// }
// greet(); //isme this mera undefined ko point kr rha hai use strict me

"use strict"
// a = 20; //non-strict mode me ye shi chalega pr use strict me ye error dega ke phle a ko define kro
// console.log(a);

// 3.)inside a method(Object context)
// when this is used inside an object's method, it refers to the object that owns the method 


// const obj = {
//     name:'rohan',
//     age:25,
//     greet : function(){
//         console.log(this.name);
//     }
// }
// obj.greet(); //isme this obj ko point kr rha hai so m this se obj ki property ko access krpaunga

// "use strict"
// function greet(){
//     console.log(this);
// }
// greet(); //isko call krne pr this this undefined ko point krega
// window.greet(); //strict use kiya hai toh this mera undefined ko point krna chahiye pr jb maine context diya toh ab ye this mera global object wale ko point krega

// 4.)Arrow function:-don't have their own this.
// Instead, they inherit this from surrounding (lexical) scope

// let obj = {
//     name:'rohan',
//     age:25,
//     greet: ()=>{
//         console.log(this); //arrow function ka khud ka this nhi hota to ye mera surrounding(here,obj in global scope aur wo hai window) jisko ye this point kr rha hoga
//     }
// }
// obj.greet();

// let obj = {
//     name:'rohan',
//     age:25,
//     greet:function(){

//         let ab = ()=>{
//             console.log(this); //ye this greet scope pe gya pr wo khud scope nhi hai isiliye wo bhi obj wale pr gya aur usko point kr rha hai
//             onsole.log(this);
//         }
//          ab();
//     }
// }
// obj.greet();

// 4.) Inside a Constructor or a class
// In constructor and classes, this refers to the instance of the object

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
let a = new Person("rohan",25);
console.log(a);




































