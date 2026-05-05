// call back function  : jb hmm kisi function me kisi dusre function ka reference as an argument pass krte hai tb ussse parameter me lekr call kre tb call back function kahalayega 
// ab hmm function ko kisi variable me bhi toh store rkte the jiske pass usss function ka reference hota hai to hmm usse bhi pass kr skte hai

//phla way

// function names(fun){
//     console.log('hello this is name function');
//     fun();
// }
// function greet(){
//     console.log('this is call back function');
// }
// // names();
// // greet();
// names(greet);

// dusra way

// function names(fun){
//     console.log('hello this is name function');
//     fun();
// }
// names(function(){
//     console.log('this is call back function');
// });

//third way

// function names(fun){
//     console.log('hello this is name function');
//     fun();
// }
// const fun1 = function(){
//     console.log('this is call back function');
// };
// names(fun1);

//arrow function bhi bhej skte hai
// function names(fun){
//     console.log('hello this is name function');
//     fun();
// };

// names(()=>{
//     console.log('this is call back function');
// });


// ab jb bhi website open kre toh ussme baar baar kuch aata rhe toh uske liye hmm 
// use krenge setInterval(function_name , time in milliseconds) leta hai

// function fetchdata(){
//     console.log("I am fetching data");
// }
// setInterval(fetchdata,5000); 

// let arr = [10,20,30,40,50];
// arr.forEach(function(num){
//     console.log(num);
// })

// let arr = [10,20,30,40,50];
// arr.forEach((num)=>{
//     console.log(num);
// })
// let arr = [10,20,30,40,50];
// arr.forEach((num,index)=>console.log(num,index))

// let arr = [10,20,30,40,50];
// arr.forEach((num,index)=>console.log(num,index));

//call back function ko m kisi bhi variable me store krke rkh skta hoon
// let arr = [10,20,30,40,50];
// arr.forEach((num,index,arr)=>{
//     arr[index] = num*7;
//     console.log(arr[index],index);
// });

// const fun1 = (num,index,arr)=>{
//     arr[index] = num*7;
//     console.log(arr[index],index);
// }
// let arr = [10,20,30,40,50];
// arr.forEach(fun1);
 
// filter
// let arr = [1,2,3,4,5];
// const result = arr.filter((num)=>{
//     return num%2==0;
// })
// console.log(result);
// let arr = [1,2,3,4,5];
// const result = arr.filter((num)=>num%2==0);
// console.log(result);

//more use of filter
// const students = [
//     {name:'rohan',age:25,gender:'male'},
//     {name:'sohan',age:26,gender:'male'},
//     {name:'aohan',age:28,gender:'male'},
//     {name:'bohan',age:22,gender:'male'},
//     {name:'hohan',age:23,gender:'male'},
// ]
// const result = students.filter((num)=>{return num.age>25;})
// const result = students.filter((num)=>num.age>25);
// const result = students.filter(({age})=>age>25);

// console.log(result);

//map

// let arr = [2,4,3,6,1];
// const result = arr.map((num)=>{return num*num});
// const result = arr.map((num)=>num*num);
// const result = arr.map((num,index)=>{
//     console.log(index);
//     return num*num;
// });
// console.log(result);

let arr = [2,4,3,1];
const result = arr.filter((num)=>num%2==0).map((num)=>num*num);
console.log(result);






































