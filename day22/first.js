// call back hell

// aise toh alag alag function call krne ke liye whi function jo information dono ke liye use krni hai ye code ki length bda de rha hai 

// function fetchuser1(callback){
//     console.log("Fetching the user details........");
//     setTimeout(()=>{
//      console.log("Data fetching successfully");
//      const name = "Rohan";
//      greet(name);
//     },2000);
// }
// function fetchuser2(callback){
//     console.log("Fetching the user details........");
//     setTimeout(()=>{
//      console.log("Data fetching successfully");
//      const name = "Rohan";
//      meet(name);
//     },2000);
// }

// call back function -> call back se same function me alag alag function pass krke m usss function ko repetitive times use krskta hoon
function fetchuser(callback){
    console.log("Fetching the user details........");
    setTimeout(()=>{
     console.log("Data fetching successfully");
     const name = "Rohan";

     callback(name);
    //  greet(name);
    //  meet(name);
    },2000);
}

function greet(name){
    console.log(`Hello ${name}`);
}
function meet(name){
    console.log(`Hello ${name},I will meet you in Delhi`);
}

function edit(name){
    console.log(`Edit ${name},of the user`);
}

// fetchuser(greet);
// fetchuser(meet);
    fetchuser(edit);