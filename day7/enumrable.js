// let obj = {};
// obj.name = "rohan";
//object also has more properties other than key values which is writable enumerable configurable
// console.log(Object.getOwnPropertyDescriptors(obj));
// console.log(Object.getOwnPropertyDescriptors(obj,'name'));
// toh agar writable:true hai toh hmm object ki values ko change kr skte hai aur agar false hai toh hmmm values change nhi krskte hai
// configurable:true hai toh hmm writable aur enumerable ko true se false me aur false se true me bhi change kr skte hai

// let obj = {};
// Object.defineProperty(obj,'name',{
//     value:"rohan",
//     writable:true,
//     enumerable:true,
//     configurable:false,
// }
// )
// obj.name="sohan";
// console.log(obj); isme name change hojayega kyuki writable:true hai

let obj = {};
Object.defineProperty(obj,'name',{
    value:"rohan",
    writable:false,
    enumerable:true,
    // configurable:false se aage kbhi writable enumerable ko change nhi kr paunga
    configurable:false,
}
)
obj.name="sohan";
// console.log(obj);

// let obj1 = {
//     name:"rohan",
//     age:25, 
//     account_number:98437579
// }
// ab m chahta hoon ke future me isss account_number ko koi change nhi krpaaye toh uske liye
// Object.defineProperty(obj1,'account_number',{
//     writable:false
// },'age',{writable:false} )
// Object.defineProperty(obj1,'name',{writable:false})
// obj1.account_number=8932939;
// obj1.name="sohan";
// console.log(obj1);

//enumerable
//Object.prototype
let obj1 = {
    name:"rohan",
    age:25, 
    account_number:98437579
}

let obj2 = Object.create(obj1);
obj2.city = "noida";
obj2.place = "u.p";

Object.defineProperty(obj1,'name',{
    enumerable:false,
})

// for(let key in obj1)
//     console.log(key);
// obj1 bhi toh Object.prototype se property inherit kr rha hai pr fir bhi uski keys ko print nhi kra rha hai toh iska matlab simple hai ke Object.prototype ki keys ka enumerable false hoga simple

// for(let key in obj2)
//     console.log(key);

// console.log(Object.getOwnPropertyDescriptors(obj1,'name'));
// console.log(Object.getOwnPropertyDescriptors(Object.prototype,'toString'));
// above wale ka output hai ye
//  toString: {
//     value: [Function: toString],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },

//toh hmm Object.prototype ke enumerable ko true bna skte hai toh haan bilkul bna skta hoon
console.log(Object.getOwnPropertyDescriptors(Object.prototype,'toString'));

Object.defineProperty(Object.prototype,'toString',{enumerable:true});

for(let key in obj1)
    console.log(key);

for(let i in obj2)
    console.log(i);