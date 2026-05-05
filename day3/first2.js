//primitive datatype

const num=10;
// console.log(num);

//non primitive datatype

const obj={
    id:10,
    balance:200
}
obj.id =11;
// console.log(obj);

let obj2={
    id:30,
    money:400
}
//ye allow nhi hoga kyuki obj ka address const bnaya hai joki obj2 ke address ko nhi lega 
//error

// obj=obj2;
// console.log(obj);

//String in JS
let str1 = "Hello kaise ho sbhi ke sbhi";
let str2 = 'Aur btao kya haal chaal hai';
let str3 = `Filhal toh sb kuch thik thak hai`;
// console.log(str1);
// console.log(str2);
// console.log(str3); 

let price = 40;
// console.log(`Price of the chips is ${price}`);
// console.log("Price of chips is",price);

//string concatination
let s1 = "hello";//5 character
let s2 = " kaise ho sbhi";//space bhi as a character add hoga
let s3 = s1+s2;
console.log(s3.length);

//print this with quotation:-"hello kaise ho sbhi"
console.log('"hello kaise ho sbhi"');
console.log("'hello kaise ho sbhi'");

let message ="This is a message to read,\tab ye wala part next line me aaye";
let message1 ="This is a message to read,\\n ab ye wala part next line me aaye";
console.log(message);
console.log(message1);

//Searching in a string
let a="hello kaise ho kaise";
console.log(a.indexOf("ll"));
console.log(a.indexOf("kaise"));
console.log(a.lastIndexOf("kaise"));
console.log(a.indexOf("Kaise"));
console.log(a.includes("hello"));
console.log(a.includes("Hello"));
               //      -2-1
let newstring = "Hellosbhi";
//slice can take negative index also
console.log(newstring.slice(0,3));
//substring doesn't take negative index
console.log(newstring.substring(0,3));
//-5 index se 6 se ek km index wale ko print krke dedega
console.log(newstring.slice(-5,3)); 
// console.log(substr.slice(0,3));

let abc ="Hello ji kaise ho Hello";
console.log(abc.replace("Hello","Haan ji"));
console.log(abc.replaceAll("Hello","Aur btao kya haal chaal"));

let str5 = "Money! honey! sunnyday! funny";
console.log(str5.split("!"));//[ 'Money', ' honey', ' sunnyday', ' funny' ] 
console.log(str5.split("! "));//[ 'Money', 'honey', 'sunnyday', 'funny' ] isme !space(delimiter) ke basis pr split ki string aur array me convert hogyi

let str6 = "  hello ji   ";
console.log(str6.trim());//trim removes only starting aur ending whitespaces middle ke space nhi htayega
console.log(str6.trim().length);


//new way to create string
let latest = new String("Hello kaise ho sbhi");
console.log(latest);  
console.log(typeof latest);