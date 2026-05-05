// map : collection of key value pair where keys and value can be of any datatype but keys should be unique(not two keys are similar)

// const map1 = new Map();
// map1.set(3,90);
// map1.set("rohan",45);
// map1.set(20,'sohan');
// map1.set('rohan',67); //value ko update krega

// map1.delete('rohan');
// console.log(map1.has('rohan'));

// console.log(map1);

const map1 = new Map([
    [4,'rohan'],['sohan',45],[32,67]
])
// for(let i of map1)
//     console.log(i);

for(let [key,value] of map1)
    console.log(key,value);








































































