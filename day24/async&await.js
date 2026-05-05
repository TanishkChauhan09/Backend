// prepareorder ko mainly placeorder ke order(jo object hai and prepareorder ki information ko store kre hue hai) se hi toh matlab hai toh bss isi ke liye ke jb m placeorder ko call kru toh mujhe callback nhi krna hai aur direct wo order wala object mil jaaye so ab tu wo order ko laane me kitna bhi time lga mujhe bss order wala chahiye 

const cart = ["pizza","coke","milk"];

function placeorder(cart){
    console.log("Talking with domino's");
    // new promise create krenge and setTimeout wale ko usme daal denge

    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{

            // reject bhi lga skta hoon ke jo bhi cart me hai kya wo available hai ya nhi agar available hai tbhi order wale ko bhejunga wrna reject krdunga aur wo(reject wala) kisme jaata hai catch me jaata hai
            const food_available = true; // agar ye false hai toh reject wali condition chalegi
            if(food_available)
            {
                console.log("Order placed successfully");
                const order={orderid:321 , food:cart , restaurant:"Dominos" , location:"Khurja"}; 
                // callback wale ki place pr resolve likh deta hoon kyuki order wale ko hi toh resolve likh rha hoon
                // ab ye order wala pr me chla jaayega
                resolve(order); // order wala resolve me jayega fir wo promise 'pr' me jayega then fir 'pr' return hoga
            }
            else
            {
                reject("Items Out of stock");
            } 
        },2000);
        
    })

    return pr;

}

function preparingorder(order){
    console.log("pizza preparation started");
    
    const pr = new Promise(function(resolve ,reject){

        const foodprepare = true;
        if(foodprepare)
        {
            setTimeout(()=>{
                console.log("Pizza preparation Done");
                const foodDetails={token:12 , restaurant:order.restaurant , location:order.location};
                resolve(foodDetails); // foodDetails wala resolve me jayega agar ye chalta hai toh fir wo promise 'pr' me jayega then fir 'pr' return hoga
            },5000);
        } 
        else
        {
            reject("Pizza is out of stocks");
        }
    })

    return pr;
}
function pickuporder(foodDetails){
console.log("Reaching Restaurant for picking order");
    
   const pr = new Promise(function(resolve,reject){

    setTimeout(()=>{
        console.log("Picked up your order from Restaurant");
        const droplocation= foodDetails.location;
        resolve(droplocation); 
    },3000);

   })

   return pr;

}

function deliverorder(droplocation){
    console.log("Delivering the Pizaa is on the way");
    setTimeout(()=>{
        console.log("Order Delivered successfully");
    },5000);
}

// create pomises by ourself
// const prom = placeorder(cart);
// prom.then(()=>{
//     preparingorder(order);
// }) //can also write this like


// ab inhe direct toh aise hi call nhi krunga because ye function call mere async type ki function call hai, ye aise hi normally 
// wait nhi krega, ab m ye chahta hoon ke jbtk mere order me value na aaye placeorder(cart) wale se toh tbtk ye aage call na ho , to
// toh isko hmm achieve kaise krskte hai toh isi ke liye hmm 'await' use krskte hai,ab await se ye function call yha pr wait krega ke jbtk function call se value na aaaye aur order me naa jaaye tbtk ye wait krega 'await' ki help se 

// const order = await placeorder(cart);
// const foodDetails = await preparingorder(order);
// const droplocation = await pickuporder(foodDetails);
// deliverorder(droplocation); //ab await ko aise khule me direct use nhi krskta isko ek async function me hi use krna hota hai then fir uss function ko call krdo(async wale ko)


async function greet(){

    //error handling in this await: jo kuch bhi aa rha hai ussse try me likhunga error ko catch me(jo reject se aayega)
    try
    {
        const order = await placeorder(cart);
        const foodDetails = await preparingorder(order);
        const droplocation = await pickuporder(foodDetails);
        deliverorder(droplocation);
    }
    catch(error)
    {
        console.log(error);
    }
}

// greet(); 




// await ko promises ke saath use krskta hoon
// placeorder(cart) // placeorder wala order laakr '.then' wale ko dedega fir wo order prepareorder me chla jaayega
// .then(order=>preparingorder(order)) // prepareorder wala foodDetails laakr '.then' pe bhejega and fir wo pickuporder me chla jeeyega aur ab uss then se wo pickuporder me chla jaayega
// .then(foodDetails=>pickuporder(foodDetails)) // pickuporder wala ab droplocation ko laane me jitna bhi time lgaaye wo tbtk wo nwxt wale '.then' me nhi jaayega aur fir wo gya uske pass tb wha se deliverorder me chla jayega
// .then(droplocation=>deliverorder(droplocation)) // inme ab m kisi pe depend nhi hoon ke jb koi mujhe call krega tbhi m call hunga toh aisa nhi hai bss jbtk wo mujhe data laake nhi deta tbtk m nhi chalunga
// .catch(error=>console.log(error)); // error me reject wala message aayega
// '.then' meri ye problem resolve kr rha tha ke jbtk mera data puri tarah se na aajaye tbtk m wait '.then' me jo hai usko execute nhi krunga

// ***********************************************************
    // const p1 = new Promise(function(resolve,reject){
    //         setTimeout(()=>{
    //             resolve("Hello Everyone")
    //         },5000) // promise ne isko promise kiya hai ke 5 second ke andar value resolve hokr chli jaayegi
    // })
 
    // direct p1 ko print nhi kra skta mujhe jb tk data nhi aajata tbtk wait krna pdega
    // console.log(p1); // peomise pending aa jayega
    // p1.then((response)=>console.log(response));

    // async function meet(){
    //     const data1 = await p1;
    //     console.log(data1);
 
    //     // iss await ne 5 sec yha pe wait kyu nhi kiya
    //     const data2 = await p1;
    //     console.log(data2); // await me toh wo wait krega pr ye toh phle wale ke saath hi hello everyone print krde rha hai 
    // }
    // meet();
    
    // ***************************************************************
    const p1 = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("First Promise resolved")
        },5000) // promise ne isko promise kiya hai ke 5 second ke andar value resolve hokr chli jaayegi
    })
    const p2 = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Second Promise Resolved")
        },8000) // promise ne isko promise kiya hai ke 5 second ke andar value resolve hokr chli jaayegi
   })

//    async function meet(){
//     const data1 = await p1;
//     // data se phle toh print hoga pr wait hone ke baad print hoga
//     console.log("Hello kaise ho");
//     console.log(data1);

//     // iss await ne 5 sec yha pe wait kyu nhi kiya
//     // kyuki 5 sec toh hochuke hai already toh wo dono callback(task) queue me aa chuke honge kyuki upar se code execute hona start hota hai 
//     const data2 = await p2;
//     console.log(data2); // await me toh wo wait krega pr ye toh phle wale ke saath hi hello everyone print krde rha hai 
//    }
// meet();

// *******************Writing p1 , p2 in the function*********************************************

function test1(){

    const p1 = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("First Promise resolved")
        },5000) // promise ne isko promise kiya hai ke 5 second ke andar value resolve hokr chli jaayegi
    })

    return p1;
}

function test2(){

    const p2 = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Second Promise Resolved")
        },5000) // promise ne isko promise kiya hai ke 5 second ke andar value resolve hokr chli jaayegi
   })

   return p2;
}
  
async function meet(){

    const data1 = await test1();
    console.log(data1);
    
    // isme second wala bhi 5sec of 1st wale ke baad aayega
    // kyuki ye kisi function ke andar wrapped hai
    const data2 = await test2();
    console.log(data2); 

   }

meet();

// agar async kuch bhi return nhi kr rha hai toh undefined ko pkadkr usssse return krdega
// async function heet(){

// }
// heet().then(value=>console.log(value));
// Async function always return a Promise
// await will always be used inside async

 


