// for in loop : isko hmm array ke saath nhi lete hai
// array is an object so arr.name="rohan" bhi likh skta hoon
// toh key hme name ko dedega joki array ka index kbhi string ho hi nhi skta

const arr = [2,45,32,67,45,87,95];
arr.name="rohan";
// for(let key in arr)
//     console.log(key,arr[key]);
// 0 2
// 1 45
// 2 32
// 3 67
// 4 45
// 5 87
// 6 95
// name rohan toh for in loop array ka index string de rha hai joki array me possible nhi hai 

//toh array me hmm for in loop ko use nhi krenge simple jo loop hota hai whi use krenge
for(let i=0;i<arr.length;i++)
    console.log(i,arr[i]);



