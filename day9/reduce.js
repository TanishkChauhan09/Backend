//reduce
// const arr = [10,20,30,40];
//reduce(call_back_function,initialisation)
// const result = arr.reduce((acc,curr)=>{
//     console.log(acc,curr); 
//     acc = acc+curr;
//     return acc;
// },0)
// console.log(result);

// const result = arr.reduce((acc,curr)=>acc+curr,0)
// console.log(result);

let arr = ['orange','apple','banana','orange','apple','banana','orange','apple','orange'];
//final result ek object chahiye toh me initialisation me ek empty object bhej dunga 
// const result = arr.reduce((acc,curr)=>{
//      if(acc.hasOwnProperty(curr))
//         acc[curr]++;
//     else
//     acc[curr]=1;

//     return acc;
//     },{}); //initialisation of acc is empty object
    // console.log(result);

    const result = arr.reduce((acc,curr)=>{
        acc.hasOwnProperty(curr)? acc[curr]++ : acc[curr]=1;
        return acc;
       },{orange:1,apple:3})    
       console.log(result);





















































































