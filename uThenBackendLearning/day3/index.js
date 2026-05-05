// to use the express
const express = require("express");
// to create server
const app = express();

// to get reply from server


app.use("/about",(req,res)=>{
    // res.send("Hello kaise ho");
    res.send({"name":"rohan" ,"age":20,"money":70}); 
})

app.use("/contact",(req,res)=>{
    // res.send("Hello kaise ho");
    res.send("I am your contact page");
})

app.use("/",(req,res)=>{
    // res.send("Hello kaise ho");
    res.send("I am your home page"); 
})

// listening server at any port number 
app.listen(4000,()=>{
    console.log("Listening at Port Number 4000");
})