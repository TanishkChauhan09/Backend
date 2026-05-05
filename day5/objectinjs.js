//how to create object
// const obj = {
//     0:20,
//     1:20,
//     "name":"rohan",
//     account_balance:4235089,
//     gender:"Male",
//     age:24,
//     "account number": 34
// }
// console.log(obj['0']); 
// console.log(obj[0]); 
// console.log(obj.0); // ye error dega number type ki keys ko me dot se access nhi krskta aur agar square bracket se access jr rha hoon toh usme mujhe quotes lgaane ki need nhi hai but agar sting type ki key hai aur usssse bracket se access kr rha hoon toh mujhe quotes lgaane hi pdenge




// console.log(obj);
// console.log(typeof obj);
// console.log(obj.gender);
// console.log(obj["gender"]);
// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj.account number);  //aise access nhi krskta iss se error dega
// console.log(obj["account number"]);

// let arr = [2,3,4,5,"hello"];
//array aur object ki implementation bilkul same hai 
//toh array internally aise dikhega
//let arr = {
//      0:2,
//      1:3,
//      2:4,
//      3:5,
//      4:"hello"
// }

// console.log(arr["length"]);
// console.log(arr.length);

//property can be add in object created by another method
const person = new Object();
// property add
person.name="rohan";
person.id=1231;
person.gender = "male";
// console.log(person["gender"]);
//delete
// delete person.gender;
// console.log(person);

//Modify or update
person.name= "sohan";
person.account_number = 76324;
// console.log(person);

//third method to create object
// class People{
//     constructor(na,ag,gen){
//         this.name=na;
//         this.age = ag;
//         this.gender = gen;
//     }
// }
// let per1 = new People("Rohan",20,"male");
// let per2 = new People("Sohan",25,"Male");
// console.log(per1,per2);

let obj  = {
    name:"rohan",
    age:28,
    account_numberr:23525,
    gender:"male"
}
//keys accessing
// const arr = Object.keys(obj);
// console.log(arr); 
//values accessing
// const arr1 = Object.values(obj);
// console.log(arr1);  
//key:value
// const arr2 = Object.entries(obj); 

//assign use case
const obj1={a:1,b:2};
const obj2={c:2,d:4};

// const obj3=Object.assign(obj1,obj2); //isss se obj1 me bhi change ho jayega kyuki assign me funstion me starting wala source hota hai isiliye bahut se log khaali bracket dete hai ke kuch bhi ho wo isss naye object me store hojaye
// console.log(obj3,obj1); 
// console.log(obj3,obj2);

const obj4 = {
    e:5,
    f:6
}
// const obj3=Object.assign({},obj1,obj2,obj4);
// console.log(obj3);
// console.log(obj3,obj1);

const obj5 = {...obj1,...obj2,...obj4};
// {{a:1,b:2},{c:3,d:4}}:-spread operator se ye andar wale bracket(usss object ko open kedeta hai)hatt jayenge ya spread hojayenge{a:1,b:2,c:3,d:4} aisa dikhega
console.log(obj5);




