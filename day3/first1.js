let a=20;
let b=a;
b=30;
console.log(b);
console.log(a);
//Primitive datatype:Immutable(non changeable) Number,string,bigint,undefined,boolean
//No-primitive datatype:Mutable(changeable) array,function,object

let obj1={
    id:20,
    nameing:"Rohan"
}
let obj2=obj1;

console.log(obj1);
console.log(obj2);

obj2.id = 30; 

console.log(obj1);
console.log(obj2);


