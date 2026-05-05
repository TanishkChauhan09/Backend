//if-else
// let age = 7;

// if(age>=18)
// {
//     console.log("Eligible for vote");
// }
// else
// {
//     console.log("Not Eligible for vote");
// }

//if else-if else

// let age=20;
// if(age<18)
// {
//     console.log("kid");
// }
// else if(age>=18 && age<45)
// {
//     console.log("young");
// }
// else
// console.log("old");
    
//Multiple condition:switch
//switch me strict comparision(===)same type ka data hona chahiye
// let num ="4";
// switch(num)
// {
//     case 0:
//         {
//             console.log("Sunday");
//             break;
//         }
//     case 1:
//             {
//                 console.log("Monday");
//                 break;
//             }  
//     case 2:
//         {
//             console.log("Tuesday");
//             break;
//         }   
//     case 3:
//     {
//         console.log("Wednesday");
//         break;
//     }     
//     case 4:
//     {
//         console.log("Thursday");
//         break;
//     }  
//     case 5:
//     {
//         console.log("Friday");
//         break;
//     }  
//     case 6:
//     {
//         console.log("Saturday");
//         break;
//     }   
//     default:
//         console.log("Not a Valid day");               
// }

//for loop
//sum of first n numner:10 number
// let sum=0;
// for(let i=0;i<=10;i++)
//     sum+=i;
// console.log(sum);

//Nested for loop
// for(let i=0;i<6;i++)
// {
//     for(let j=0;j<6;j++)
//         console.log(j);
// }

//Scope ke baare mein(local,global,block(jo if else wagera me aayenge))
//var

//global scope
// let a = 10;
// var b = 20;
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// function fun(){
//local variables only accessible in function
// let a = 10;
// var b = 20;
// const c = 30;
// console.log("Hello function");

// }

// fun();
// console.log(a); //error dega kyuki a local variable hai

if(true)
{
    let a = 10;
    var b = 20;
    const c = 30;
}
// console.log(a); //ye toh error dega kyuki a local(functional scope jo function me bnaaye hai) hi ussi block me access hoskta hai
// console.log(b);

//var se same variable me bhi do baar value asssign kr skta hoon
// var abc = 20;
// var abc = 30;
// console.log(abc);



// let arr = [1,2,3,4]
// arr.push(5);
// console.log(arr);
// console.log(arr.__proto__==Array.prototype);
// console.log(arr.__proto__.__proto__==Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__==null);

//ye error nhi dega
// fun();
function fun(){
    console.log("Hello");
}

//ye error dega
// meet();
const meet = function(){
    console.log("Kaise ho");
}

// let arr = [1,2,3,4,5]
// for(let i=0;i<arr.length;i++)
//     console.log(arr[i]);

let obj = {
    name:"rohan",
    age:30,
    city:"Noida",
    gender:"male"
}
const key = Object.keys(obj);
// console.log(key);
// for(let i=0;i<key.length;i++)
// {
//     console.log(key[i]);
// }

for(let i=0;i<key.length;i++)
{
    console.log(key[i]);
    // obj["name"],obj["age"]
    //[ 'name', 'age', 'city', 'gender' ]
    console.log(obj[key[i]]);
}





















