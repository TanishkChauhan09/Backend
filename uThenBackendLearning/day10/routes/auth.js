const express = require("express");

const authRouter = express.Router();
const bcrypt = require('bcrypt');
const user = require("../models/user");

// replace app with authrouter
authRouter.post("/register", async(req,res)=>{

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



authRouter.post("/login",async(req,res)=>{

    try{
            const people = await user.findOne({emailid : req.body.emailid});

            if(!(req.body.emailid===people.emailid)){
                // throw new Error("Email is not correct");
                throw new Error("Invalid Credentials");}

            const isAllow = people.verifypassword(req.body.password);
            
            if(!isAllow)
                 throw new Error("Invalid Credentials");

            // jwt token
            // const token = jwt.sign({_id:people.id , emailid:people.emailid},"rohan@12435",{expiresIn:100})
            const token = people.getJWT();

            // res.cookie("token","lksldjfweienxof21335nsandl43");
            res.cookie("token",token);
            res.send("login Successfully");
    }
    catch(err){
        res.send("Error: "+err.message);
    }
})


authRouter.post("/logout",async(req,res)=>{

    try{
        res.cookie("token","osdhfosdhdfn",new Date(Date.now()));
    }
    catch(err)
    {
        res.send("Error: ",err.message);
    }
})

module.exports = authRouter;





