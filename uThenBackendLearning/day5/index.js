const express = require("express");
const app = express();

const {Auth} = require("./middleware/auth");

app.use(express.json());

// database:array manually create
const FoodMenu = [
    {id:1,food:"paneer",category:"veg",price:"200"},
    {id:2,food:"roti",category:"veg",price:"300"},
    {id:3,food:"salad",category:"veg",price:"100"},
    {id:4,food:"sabji",category:"veg",price:"1500"},
    {id:5,food:"tandoori",category:"veg",price:"600"},
    {id:6,food:"butter naan",category:"veg",price:"900"},
    {id:7,food:"daal",category:"veg",price:"700"},
    {id:8,food:"rajma",category:"veg",price:"800"},
    {id:9,food:"rice",category:"veg",price:"1200"},
    {id:10,food:"eggs",category:"non-veg",price:"100"},
    {id:11,food:"halwa",category:"veg",price:"300"},
    {id:12,food:"momos",category:"veg",price:"900"},
    {id:13,food:"burger",category:"veg",price:"600"},
    {id:14,food:"sweets",category:"veg",price:"400"},
    {id:15,food:"water balls",category:"veg",price:"200"},
    {id:16,food:"namkeen",category:"veg",price:"400"},
    
]

// user's add to cart, whenever user will addtocart that info goes into this array
const AddToCart = [];

app.get("/food",(req,res)=>{
      res.status(200).send(FoodMenu);
})

// MiddleWare to check for valid admin intially so that i don't need to write this 
// valid admin code in each https methods(post,delete,patch etc.) oterwise code will be bulky
// app.use("/admin",(req,res,next)=>{
//     const token = "ABCDEF";
//     const Access = token==="ABCDEF"?1:0;

//     if(!Access){
//         res.status(403).send("No permission");
//     }
     
//     next();
// })
app.use("/admin",Auth);

app.post("/admin",(req,res)=>{
    //   // This access will be given to admin so authentication needed here
    //   // Authentication
    //   // dummy code 
    //   const token = "ABCDEF";
    //   const Access = token==="ABCDEF"?1:0;

    //   if(Access){
        FoodMenu.push(req.body);
        res.status(201).send("Item added Successfully");
    //   }
    //   else
    //     res.send("Items can not be added"); 
})

app.delete("/admin/:id",(req,res)=>{
    //   // This access will be given to admin so authentication also needed here
    //   // Authentication
    //   // dummy code 
    //   const token = "ABCDEF";
    //   const Access = token==="ABCDEF"?1:0;

    //   if(Access){
        const id = parseInt(req.params.id);

        const index = FoodMenu.findIndex(items=> items.id===id);

        if(index==-1){
            res.send("Items doesn't excess");
        }
        else{
            FoodMenu.splice(index,1); 
            res.send("Successfully deleted");      
        }
    // }
    // else{
    //     res.status(403).send("No permission");
    // }
})

app.patch("/admin",(req,res)=>{
    //   // This access will be given to admin so authentication also needed here
    //   // Authentication
    //   // dummy code 
    //   const token = "ABCDEF";
    //   const Access = token==="ABCDEF"?1:0;

    //   if(Access){
        const id = req.body.id;

        const Fooddata = FoodMenu.find(items=> items.id==id);
        if(Fooddata){
            if(req.body.food)
              Fooddata.food = req.body.food;
            if(req.body.price)
              Fooddata.price = req.body.price;
            if(req.body.category)
              Fooddata.category = req.body.category;
        res.send("Updation Successfully");
        }
        else
        res.send("Item doesn't exist");
    //   }
    //   else{
    //     res.status(403).send("No Permission");
    //   }

})

app.post("/user/:id",(req,res)=>{

    const id = parseInt(req.params.id);
    const foodItem = FoodMenu.find(items=>items.id===id);

    if(foodItem){
        AddToCart.push(foodItem);
        res.status(200).send("Item AddedToCart Successfully");
    }
    else{
        res.send("Item out of Stock");
    }

})

app.delete("/user/:id",(req,res)=>{

    const id = parseInt(req.params.id);

    const index = AddToCart.findIndex(item=>item.id===id);

    if(index==-1)
    {
        res.send("Item is not in the cart");
    }
    else{
        AddToCart.splice(index,1);
        res.send("Deleted from the cart successfully");
    } 
})

app.get("/user",(req,res)=>{

    try{
        if(AddToCart.length==0){
        res.send("Cart is Empty");
        }
        else{
        res.send(AddToCart);
        }
    }
    catch(err){
        res.send("Some Error Occured "+err);
    }
})

// Error Handling
app.get("/dummy",(req,res)=>{
    try{
        throw new Error("Broken");
        res.send("Hello");
    }
    catch(err){
       res.send("Some Error Occurred: "+err);
    }
})

app.listen(6000,()=>{
    console.log("Listening at port 6000");
})