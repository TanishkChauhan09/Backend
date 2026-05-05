// call back hell

// async task
// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=a3e3cfeb68234763976164523251401&q=London&aqi=yes`)


// console.log(obj); // ye fetch(async task hai aur isko execute hone me kuch time lgega) wala kuch time lega jiss se ki maine uska wait hi nhi kiya aur print kra diya directly isiliye ye pending me chla jayega

// setTimeout(() => {
//     console.log(obj);
// },2000); // ye data laa dega pr ye pta kaise chalega ke exact kitne time ke baad wo lekr aayega kmm time me bhi laa skta hai

// obj.then((data)=>{ // aur isme jo ye obj hai isssi ko promise bolte hai
//     console.log(data);
// })

// now obj is equivalent to Promises and data to response bsss terminology change krdi hai

const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=a3e3cfeb68234763976164523251401&q=London&aqi=yes`)

// Promises.then((response)=>{  // resolve isme jaayega // aur isme jo ye obj hai isssi ko promise bolte hai
//     console.log(response);  // agar promises me jo hmne maanga hai wo nhi aaya toh kya tbtk wait hi krte rhe uske aane ka nhi, toh hme error ko handle bhi krna aana chahiye
// }).catch((error)=>{ // reject isme jaayega
//      console.log(error);
// });

// promises has three states : pending resolve reject

// ye Promises at the end object hi hai
// const pro2 = Promises.then((response)=>{
// //    const pro2 = response.json(); // json JAVASCRIPT OBJECT NOTATION
// //    pro2.then((data)=>{
// //      console.log(data);
// //    })
// return response.json();
// })

// pro2.then((data)=>{
//     console.log(data);
// })


// pro2 pr hi toh then lga rha tha toh kyu na jo koi pro2 me return kr rha tha directly usssi pr then lga doon issse hi promise chaihing kehte hai
// json ek format hai jo bhi raw form me data aata hai usko hmm raw form me convert krdete hai 
// Promises.then((response)=>{
// return response.json();
// }).then((data)=>{
//     console.log(data);
// })


// aur jyada short likh skta hoon

// Promises.then((response)=>response.json())
// .then((data)=>console.log(data)) 


// aur short

// fetch(`http://api.weatherapi.com/v1/current.json?key=a3e3cfeb68234763976164523251401&q=London&aqi=yes`)
// .then((response)=>response.json())
// .then((data)=>console.log(data)) 
// .catch((error)=>console.log(error));

fetch(`http://api.weatherapi.com/v1/current.json?key=a3e3cfeb68234763976164523251401&q=London&aqi=yes`)
.then(response=>response.json())
.then(data=>console.log(data.current.temp_c)) 
.catch(error=>console.log(error));





