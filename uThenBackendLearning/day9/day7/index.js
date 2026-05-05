const express = require("express");
const app = express();
const main = require("./database");
const user = require("./models/user");
const validateuser = require("./utils/validateuser");
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const userAuth = require("./middleware/userAuth");

app.use(express.json());
app.use(cookieParser());

app.post("/register", async(req,res)=>{

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
            const people = await user.findOne({emailid : req.body.emailid});

            if(!(req.body.emailid===people.emailid)){
                // throw new Error("Email is not correct");
                throw new Error("Invalid Credentials");}

            const isAllow = await bcrypt.compare(req.body.password, people.password);
            
            if(!isAllow)
                 throw new Error("Invalid Credentials");

            // jwt token
            // const token = jwt.sign({_id:people.id , emailid:people.emailid},"rohan@12435",{expiresIn:100})
            const token = jwt.sign({_id:people.id , emailid:people.emailid},"rohan@12435",{expiresIn:'7d'})

            // res.cookie("token","lksldjfweienxof21335nsandl43");
            res.cookie("token",token);
            res.send("login Successfully");
    }
    catch(err){
        res.send("Error: "+err.message);
    }
})



app.get("/info", userAuth, async(req,res)=>{

    try{
         const result = await user.find();
        //  console.log(req.cookies);
        // validate the user tbhi usko m get se uski request fullfill krunga

         const payload = jwt.verify( req.cookies.token,"rohan@1243");
         console.log(payload);

         res.send(result);
    }
    catch(err){
        res.send("Error "+err.message);
    }
})



// app.get("/user/:id",async(req,res)=>{
    
//     try{
//           const result = await user.findById(req.params.id);
//           res.send(result);
//     }
//     catch(err){
//         res.send("Error"+err.message);
//     }
// })

app.get("/user", userAuth, async(req,res)=>{
    
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



app.delete("/user/:id", userAuth ,async(req,res)=>{
      
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