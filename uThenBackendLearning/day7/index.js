const express = require("express");
const app = express();
const main = require("./database");
const user = require("./models/user");
const validateuser = require("./utils/validateuser");
const bcrypt = require('bcrypt');

app.use(express.json());

app.post("/register",async(req,res)=>{

    try{

        // const mandatoryfield = ["firstname","emailid","age","password"];

        // const isAllowed = mandatoryfield.every((k)=> Object.keys(req.body).includes(k));

        // if(!isAllowed)
        //     throw new Error("Reqired fields are missing");

        validateuser(req.body);

        // converting password into hash
        req.body.password = await bcrypt.hash(req.body.password,10)

        await user.create(req.body);
        res.send("User registered successfully");
    }
    catch(err){
       res.send("Error "+err.message);
    }

})

app.post("/login",async(req,res)=>{

    try{
            const people = await user.findById(req.body._id);

            if(!(req.body.emailid===people.emailid))
                // throw new Error("Email is not correct");
                throw new Error("Invalid Credentials");

            const isAllow = await bcrypt.compare(req.body.password, people.password);
            
            if(!isAllow)
                // throw new Error("password is not correct");
                 throw new Error("Invalid Credentials");

            res.send("login Successfully");
    }
    catch(err){
        res.send("Error: "+err.message);
    }
})

app.get("/info",async(req,res)=>{

    try{
         const result = await user.find({})
         res.send(result);
    }
    catch(err){
        res.send("Error"+err.message);
    }
})

app.get("/user/:id",async(req,res)=>{
    
    try{
          const result = await user.findById(req.params.id);
          res.send(result);
    }
    catch(err){
        res.send("Error"+err.message);
    }
})

app.delete("/user/:id",async(req,res)=>{
      
    try{
         await user.findOneAndDelete(req.params.id);
         res.send("Deleted Successfully");
    }
    catch(err){
        res.send("Error"+err.message);
    }
})

app.patch("/user",async(req,res)=>{
    
    try{
        const {id,...update} = req.body;
        await user.findByIdAndUpdate(id,update,{"runValidators":true});
        res.send("Updated successfully");
    }
    catch(err){
        res.send("Error "+err.message);
    }
})

main()
.then(async()=>{
    console.log("Connected to DB");
    // Database se connect hone ke baad hi listen krunga m
    app.listen(6000,()=>{
        console.log("Listening at port 6000");
    })

    // const ans2 = await user.find({name:"rohan"});
    // console.log(ans2);
})
.catch((err)=>console.log(err))