const express = require("express");


const userRouter = express.Router();
const user = require("../models/user");
const bcrypt = require('bcrypt');
const userAuth = require("../middleware/userAuth");

// in sbme user use ho rha hai toh main router pr /user likh dunga and ab inme jhhaan jhaan pr /user hoga wo yha se hta dunga kyuki main root /user se hi to match hokr isme aaya hoga

userRouter.get("/", userAuth, async(req,res)=>{
    
    try{

        // authenticate the valid user 

        // const {token} = req.cookies;
        
        // if(!token)
        // {
        //     throw new Error("Token doesn't exists");
        // }
         
        //  const payload = jwt.verify( req.cookies.token,"rohan@1243");
        // //  console.log(payload);
        // const {_id} = payload;
        // if(!_id){
        //     throw new Error("Id is missing");
        // }

        //   const result = await user.findById(_id);

        //   if(!result){
        //     throw new Error("User doesn't exists"); 
        //   }


          res.send(req.result);
    }
    catch(err){
        res.send("Error "+err.message);
    }
})



userRouter.delete("/:id", userAuth ,async(req,res)=>{
      
    try{
         await user.findOneAndDelete(req.params.id);
         res.send("Deleted Successfully");
    }
    catch(err){
        res.send("Error"+err.message);
    }
})


userRouter.patch("/",async(req,res)=>{
    
    try{
        const {id,...update} = req.body;
        await user.findByIdAndUpdate(id,update,{"runValidators":true});
        res.send("Updated successfully");
    }
    catch(err){
        res.send("Error "+err.message);
    }
})

module.exports = userRouter;