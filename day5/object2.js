//shallow copy
// let obj1={
//     a:1,
//     b:2
// }
// let obj2=obj1;
// obj2.a=30;
// console.log(obj2,obj1);

//deep copy
// let obj3=structuredClone(obj1);
// obj3.a=70;
// console.log(obj3,obj1);

//Nested object
// const user={
//     name:"Rohan",
//     balance:420,
//     address:{
//         pin:203141,
//         city:"noida"
//     }
// }
// console.log(user.address.pin);

// const user2=Object.assign({},user);
// console.log(user2);
// user2.address.pin=324990;
// user2.name="sohan";
// console.log(user.address.pin);
// console.log(user.name);
//assign nested object ki shallow copy create krta hai baki ki toh deep copy hi create krega to isko dhyaan rkhna hai
//isiliye hmm structuredClone ka use krte hai kyuki ye sbki nested ho ya na ho deep copy create krta hai
//krenge use assign ka hmm bhi pr ye difference dhyaan rkhna hai

//Destructuring an object
let obj ={
    name:"rohan",
    money:420,
    account_no:923749,
    age:28,
    addhar:"923174021"
}
//destructuring se name ko full_name me store kra liya hai money jo aa rhi thi obj se ussse paisa me store krra liya hai
// const{name,age,money}=obj;
// console.log(name,age,money);
// const{name:Full_Name ,age:btao,money:Paisa}=obj;
// console.log(Full_Name,btao,Paisa);

//rest jo honge name age ko htakr wo sb obj6 me chale jayenge toh(...)ko yha rest operator bhi bolte hai
// const{name,age,...obj6}=obj;
// console.log(name,age,obj6);

//destructuring of array
// const arr=[3,2,1,5,10];
// const[first,second]=arr;
// const[ first,second,,third]=arr;
// const[first,second,...third]=arr;
// console.log(first,second,third);


// const user={
//     name:"Rohan",
//     age:20,
//     arr:[3,2,4,6],
//     address:{
//         pin:203141,
//         city:"noida",
//         state:"U.P"
//     }
// }
// const {name,age}=user;
// const{address}=user;
// console.log(address);

// const{address:adds}=user;
// console.log(adds);
// console.log(adds.pin);

//best way kyuki : iss se pura object aayega toh usko maine destructure krdiya hai{} ye brackets lgakr aur fir usssme se jo valua chahiye thi wo likhdi hai
// const{address:{pin,city}}=user;
// console.log(pin,city);
// const{arr:[first]}=user;
// console.log(first);

let user = {
    name:"rohan",
    amount:420,
    greet:function(){
        return "hello kaise ho";
    },
    meet:function(){
        console.log("this is meet function");
    }
}
// user.greet();
// console.log(user.greet());
// user.meet();
// console.log(user.meet());


//Prototype chaining

let user1= {
    name:"rohan",
    amount:420,
    greet:function(){
        return "hello kaise ho";
    },
    meet:function(){
        console.log("this is meet function");
    }
}

console.log(user1.toString());



























