const arr=[2,35,1,8,9,"rohan",true];
// console.log(arr[3]);//index pr value
//at is latest aur ye negative value bhi leleta hai
// console.log(arr.at(-2)); //index pr value
// console.log(arr.length); //length

const newarr1 = arr;
// console.log(newarr1);
//both will have a same reference so dono me same hi address ho hoga kyuki newarr me arr hi daala hai
// console.log(arr==newarr1);

//structuredClone same data ki heap me copy create krega aur fir uska reference neww arr me jayega fir ab dono equal nhi rhenge
const newarr = structuredClone(arr);
// console.log(newarr);
//ab me chahta hoon arr aur newarr alag alag ko point kre but data same rhna chahiye 
// console.log(arr==newarr);

//push:insert at last
// arr.push(30);
// console.log(arr);

//pop:delete from last of the array
// arr.pop();
// console.log(arr);

//unshift :add element at start
// arr.unshift(10);
// console.log(arr);

//shift: delete element from start
// arr.shift();
// console.log(arr);

//delete operation  disadvantage:see its output
//arr=[ 2, 35, 1, 8, 9, 'rohan', true ]
// delete arr[1];
// console.log(arr);  //[ 2, <1 empty item>, 1, 8, 9, 'rohan', true ]
// console.log(arr[1]);  //undefined
// console.log(arr.length);  //7

// console.log(arr.indexOf(35));
// console.log(arr.at(1));

//slice
// console.log(arr);
// console.log(arr.slice(2,5));
// console.log(arr);
//splice(start_index,total jitne elements chaiye)
//yw splice original array se splice wale part ko hta dega
// console.log(arr.splice(2,5));
// console.log(arr);

//splice(start_index,total_elements_delete,add value)
// console.log(arr);
// console.log(arr.splice(2,4,"Money",90));
// console.log(arr);

//no splice only add : so splice me total elements ko 0 kr denge
// console.log(arr.splice(2,0,"Money",90));
 
// console.log(arr);
// console.log(arr.toString());
// console.log(typeof arr.toString());
// console.log(typeof arr);

// console.log(arr.join("*"));
// console.log(arr.join("#"));

let arr1 = [2,35];
let arr2 = [5,12,16,30];
let arr4 = [3,5,8,2,11,43];
// let arr3 = arr1.concat(arr1,arr4);
// console.log(arr3);
// console.log(typeof arr3);
// arr1.push(arr2);
// console.log(arr1);
// console.log(arr1[2]);
// console.log(arr1[2][3]);

let arr5 = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr5);
// console.log(arr5[0][0]);

//convert 2-D into 1-D using spread operator(...)
let newarr3 = arr5.flat();
// console.log(newarr3);
 

//3-D array
let arr6 = [1,2,3,[4,5,[6,7]],[8,9,10]];
// console.log(arr6[3][2][1]);
// console.log(arr6.flat());  //yr sirf ek level tk flat krega
// console.log(arr6.flat(2));  //2 level tk flat hojayega

//backend se kuch aaye aur ussse pta krna ho ke wo array hai ya nhi
console.log(Array.isArray(arr6));

//one more array creation way
//not recommendable
// let ac = new Array(1,2,3,4,5);
// console.log(ac);
// let abc = new Array(2);
// console.log(abc);
