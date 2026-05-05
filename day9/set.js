// set allows only unique values in it (without duplicates) which make it different from array

// const set1 = new Set([10,20,30,40,10,20]);

// console.log( typeof set1); //due to new keyword
// //add
// set1.add(4);
// set1.add(6);
// set1.add("rohan");
// console.log(set1);

// //size
// console.log(set1.size);
// //delete
// console.log(set1.delete(4));
// console.log(set1);

//has
// const user_id = new Set(['ch_tan','abc_76','xyz_84','mno_0=98']);
// let new_user = 'ch_tan';
// console.log(user_id.has(new_user));

//to remove duplicate values from array 
// converting array into set
// let arr = [10,20,30,10,20,40,50]
// let set1 = new Set(arr);
// // converting set into array
// arr = [...set1];
// // console.log(set1);
// console.log(arr);

// union of 2 sets
let set1 = new Set([10,20,30,40,50]);
let set2 = new Set([60,70,80,90,10,20,30]);
// union of set
// let set3 = new Set([...set1,...set2]);
// console.log(set3);

//intersection
//filter:array
// const result = [...set1].filter((num)=>{
//    return set2.has(num);
// })
// console.log(result);

//final result will be in form of set
const result = new Set([...set1].filter((num)=>{
    return set2.has(num);
 }))
 console.log(result);

 //iterate over set:for of loop
//  for(let i of result)
//     console.log(i);

// forEach
set1.forEach((value)=>console.log(value));







































































