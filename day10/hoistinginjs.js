// hoisting means jo bhi code hai ussske saare variables ka declaration top pr lekr chla jayega aur yhi hoisting hai
// console.log(x);
// var x=20;

// greet();
// function greet(){
//     console.log("This is a greet function");
// }

// Memory Allocation:-greet ki value me sb kuch chla jaayega
// greet: function as a whole
// code execution phase:-
// 

// meet(); //ye error dega:-ReferenceError:Cannot access 'meet' before initialization

let meet = function(){
    console.log("This is a meet function");
}
// meet();

// Memory Allocation:- meet agar upar call kiya tb meet me kuch nhi jaayega kyuki meet let type ka hai ab jb instruction perform hone ka time aaya tb meet call hua pr meet me abhi kuch hai nhi toh Reference error dega
// lekin whi agar meet niccche call kiya tb instuction ke according meet me function initialisation phle ho rha tha toh baad me call kiya tbtk meet already initialised tha tb koi error nhi diya usne 
//meet:
// code execution phase:

// heet(); yha call krne pr ye error dega kyuki jb ye instruction chalegi tb tk heet: ki value me kuch nhi gya hoga isiliye yha ye error dega
var heet = function(){
    console.log("This is heet function");
}
heet();






































































































