const http = require('http');

const server = http.createServer((req,res)=>{
    // res.end("Hello this is the local server of port number 5500")

    if(req.url=="/"){
        res.end("This is main page");
    }
    else if(req.url=="/contact")
        res.end("This is routing contact");
    else if(req.url==="/about")
        res.end("This is our about page");
    else
    res.end("Error:page not found");


});

server.listen(5500,()=>{
    console.log("I am listening at Port no.5500");
})