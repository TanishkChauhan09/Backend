// call back hell
 
// Domino's pizza order kar rhe ho:

// callback = ()=>{
//     preparingorder();
// } 

function placeorder(callback){
    console.log("Talking with domino's");

    setTimeout(()=>{
        console.log("Order placed successfully");
        callback();
    },2000);
}

function preparingorder(callback){
    console.log("pizza preparation started");
    setTimeout(()=>{
        console.log("Pizza preparation Done");
        callback();
    },5000);
}
function pickuporder(callback){
console.log("Reaching Restaurant for picking order");
setTimeout(()=>{
    console.log("Picked up your order from Restaurant");
    callback();
},3000);
}

function deliverorder(){
    console.log("Delivering the Pizaa is on the way");
    setTimeout(()=>{
        console.log("Order Delivered successfully");
    },5000);
}

// placeorder();
// preparingorder(); 
// aisi error aayegi phle function ke dono message ke baad dusre function ka message hona chahiye toh uske liye callback function use krlenge
// Talking with domino's
// pizza preparation started
// Order placed successfully
// Pizza preparation Done

// placeorder(preparingorder);

// callback hell -> iss se code become messey and hard to read hojaata hai
placeorder(()=>{
    preparingorder(()=>{
        pickuporder(()=>{
            deliverorder();
        });
    });
});