//Function fun_name(parameters)

//jo function call me pass krte hai unhe arguments khte hai

//sum code
// function sum(number1 , number2){
//     console.log(number1+number2)
// }

// sum(2,3);
// sum(10,15);

//Multiplication
function mul(num1,num2){
    // console.log(num1*num2);
    return num1*num2;
}
// mul(3,5);
// console.log(mul(16,6));/

// const fun1=function(num1,num2){
//     console.log("Hello kaise ho");
//     console.log("Aur btao kya haal chal");
//     return num1*num2;

//     console.log("aur kya haal chaal");

// }

// console.log(fun1(2,3));


//Arrow function
const fun = (num1,num2)=>{
    console.log(num1+num2);
}
// fun(2,3);
//one more way
// const fun1 = (num1,num2)=> num1+num2;
// console.log(fun1(3,4));

// const cube=function(num){
//     return num*num*num;
// }
// const cube=(num)=>num*num*num;
// const cube=num=>num*num*num;
// console.log(cube(8));

const sum = function(...num){
console.log(num);
}
// sum(3,4,5,6);
// sum(7,45,7,6,43,87,97);
// sum(3,4);

let obj = {
    name:"rohan",
    age:30,
    amount:420
}

// function fun2(obj1){
//     console.log(obj1.name,obj1.amount);
// }
// fun2(obj);

// function fun2({name,amount}){
//     console.log(name,amount);
// }
// fun2(obj);

// function fun2(obj1){
//     const {name,amount}=obj1;
//     console.log(name,amount);
// }
// fun2(obj);

// function fun2(obj1){
//     obj1.name="sohan";
//     console.log(obj1.name,obj1.amount);
// }
// fun2(obj);
//toh pass by reference ho rha hai
// console.log(obj);










