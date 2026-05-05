// ye writable hacking se bachne ke liye nhi hota hai yi properties isiliye use krte hai so that ke jb bahut jyada code base ho toh usme kuch accidental change se bach paaye
// let user = {
//     name:"rohan",
//     age:25,
//     account_number:984755654,
// }
// Object.defineProperty(user,'account_number',{writable:false});
// console.log(Object.getOwnPropertyDescriptor(user,'account_number'));

//for of loop: ye value accessable hota hai directly values ko leta hai ye

// let arr = [65,76,46,45,86,96];
// for(let i of arr)
//     console.log(i);

// let str = "Rohan is a student";
// for(let i of str)
//     console.log(i);


//for of loop ko m kbhi object ke upar nhi lgaunga kyuki object iteratable nhi hota hai aur  isme mujhe pta hi nhi hota ke kis key ke baad khaan jana hai
const obj = {
    2:5,
    1:3,
    name:"rohan",
    age:'25',
    gender:'male'
}

// console.log(obj);   ye keys of numbers ko khud hi arramge kr leta hai
// for(let i of obj)
//     console.log(i);

//object.values obj ki values ka array return krke dega fir usssss array pr traverse krke hmmm usss obj ki values ko print kr skte hai aur similarly .keys se keys ko bhi print krdunga
// for(let i of Object.values(obj))
//     console.log(i)
// for(let i of Object.keys(obj))
//     console.log(i)




