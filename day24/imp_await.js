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

    console.log("Hello I greet you"); // 2.)YHA AATE HI ISSE PRINT KRAYA
    const data1 = await test1(); // 3.)YHA TIME REQUIRE THA TOH ISLIYE jha se aaya tha wha pr wapas jayega(main thread me) ab wha pr jinko time nhi lgne wala unhe execute krdega
    console.log(data1);
    
    // isme second wala bhi 5sec of 1st wale ke baad aayega
    // kyuki ye kisi function ke andar wrapped hai
    const data2 = await test2();
    console.log(data2); 

}
meet(); // 1.)YHA SE CONTROL MEET PR GYA
console.log("Hello kaise ho"); //4.) wha time lg rha tha toh isiliye yha wapas aa gya inhe execute krne ke liye
console.log("aur kya haal chaal hai"); // 5.) ab ye print hya AUR ISKE BAAAD KUCH NHI THA TOH AB JO BHI await tha uske data ko print krdega
// OUTPUT:
// Hello I greet you
// Hello kaise ho
// aur kya haal chaal hai
// First Promise resolved
// Second Promise Resolved