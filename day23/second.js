
// cart = ["pizza","coke","milk"];

// function placeorder(cart,callback){
//     console.log("Talking with domino's");
//     setTimeout(()=>{
//         console.log("Order placed successfully");
//         const order={orderid:321 , food:cart , restaurant:"Dominos" , location:"Khurja"}
//         callback(order);    
//     },2000);
// }

// function preparingorder(order,callback){
//     console.log("pizza preparation started");
//     setTimeout(()=>{
//         console.log("Pizza preparation Done");
//         const foodDetails={token:12 , restaurant:order.restaurant , location:order.location};
//         callback(foodDetails);
//     },5000);
// }
// function pickuporder(foodDetails,callback){
// console.log("Reaching Restaurant for picking order");
// setTimeout(()=>{
//     console.log("Picked up your order from Restaurant");
//     const droplocation={location:foodDetails.location}
//     callback(droplocation);
// },3000);
// }

// function deliverorder(){
//     console.log("Delivering the Pizaa is on the way");
//     setTimeout(()=>{
//         console.log("Order Delivered successfully");
//     },5000);
// }

// callback hell(ki problem ko inversion control bhi khenge) -> iss se code become messey and hard to read hojaata hai
// placeorder(cart,(order)=>{
//     preparingorder(order,(foodDetails)=>{ // ye callback ka parameter pickuporder wale ke pass bhej rha hoon
//         pickuporder(foodDetails,(droplocation)=>{ 
//             deliverorder(droplocation);
//         });
//     });
// });

// ******************************removing the inversion control problem with PREMISES**********************************************************************************************

// prepareorder ko mainly placeorder ke order(jo object hai and prepareorder ki information ko store kre hue hai) se hi toh matlab hai toh bss isi ke liye ke jb m placeorder ko call kru toh mujhe callback nhi krna hai aur direct wo order wala object mil jaaye so ab tu wo order ko laane me kitna bhi time lga mujhe bss order wala chahiye 

cart = ["pizza","coke","milk"];

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
                resolve(order);
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
                resolve(foodDetails);
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

placeorder(cart) // placeorder wala order laakr '.then' wale ko dedega fir wo order prepareorder me chla jaayega
.then(order=>preparingorder(order)) // prepareorder wala foodDetails laakr '.then' pe bhejega and fir wo pickuporder me chla jeeyega aur ab uss then se wo pickuporder me chla jaayega
.then(foodDetails=>pickuporder(foodDetails)) // pickuporder wala ab droplocation ko laane me jitna bhi time lgaaye wo tbtk wo nwxt wale '.then' me nhi jaayega aur fir wo gya uske pass tb wha se deliverorder me chla jayega
.then(droplocation=>deliverorder(droplocation)) // inme ab m kisi pe depend nhi hoon ke jb koi mujhe call krega tbhi m call hunga toh aisa nhi hai bss jbtk wo mujhe data laake nhi deta tbtk m nhi chalunga
.catch(error=>console.log(error)); // error me reject wala message aayega

// how to create new promise (ab uska format hai)
// Promise object is a special object which is created in this way
// const pr = new Promise(function(resolve,reject){
      
// })
// return pr;















