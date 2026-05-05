let obj  = {
    name:"rohan",
    age:20,
    gender:"male",
    id:"adc312"
}
// print all keys of object
// for(let i in obj)
//     console.log(i,obj[i]); //obj[i] is for print values of keys
// ye bhi keys dega
// console.log(Object.keys(obj));

//ab Object.keys() bhi toh keys print kra deta hai toh for in loop aur isme difference kya hai
let obj2 = Object.create(obj);
obj2.money = 420;
obj2.account = 234809;
// console.log(Object.keys(obj2));  //ye inherit wali keys ko print nhi kraega jbki for in loop kra dega kyuki obj2 me maine obj ko daala hai 
// toh yhi differnece hai
// for(let i in obj2)
//     console.log(i);

//ab hme pta hai ye obj bhi Object.prototype ko inherit krta hai toh ye uski bhi keys ko kyu print nhi kra hai

// toh object jo bnaate hai iske pass aur properties hongi jo hai writable enumerable configurable


