const express = require("express");

const app = express();

const BookStore=[
    {id:1,name:"abc",author:"authorofabc"},
    {id:2,name:"xyz",author:"authorofxyz"},
    {id:3,name:"pqr",author:"authorofpqr"},
    {id:4,name:"wxy",author:"authorofwxy"},
    {id:5,name:"def",author:"authorofdef"},
];

app.use(express.json());

app.get("/book",(req,res)=>{

    console.log(req.query);
    const Book = BookStore.filter(items=> items.author === req.query.author);
    res.send(Book);

    // res.send(BookStore);
})

app.get("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const Book = BookStore.find(items=> items.id==id);
    res.send(Book); 
})

app.post("/book", (req,res)=>{
    console.log(req.body);
    BookStore.push(req.body);
    res.send("Data successfully added");
})

app.patch("/book",(req,res)=>{
    // console.log(req.body);
    const Book = BookStore.find(items=> items.id===req.body.id);

    if(req.body.author)
        Book.author = req.body.author;

    if(req.body.name)
        Book.name = req.body.author;

    console.log(req.body);
    res.send("Patch Updated");
})

app.put("/book",(req,res)=>{
       
    const Book = BookStore.find(items=> items.id===req.body.id);
    Book.author = req.body.author;
    Book.name = req.body.name;

    res.send("Put changes updated successfully");
})

app.delete("/book/:id",(req,res)=>{

    const id = parseInt(req.params.id);

    const index = BookStore.findIndex(items=> items.id===id);

    BookStore.splice(index,1);
    res.send("Deleted Successfully");
})

app.listen(3000,()=>{
    console.log("Listening at port 3000");
})












// ****************************************************************************//

// app.use((req,res)=>{
//     res.send("Hello kya haal chal"); 
// })

// app.use(express.json());

// app.get("/user",(req,res)=>{
//     res.send({"name":"rohan"}); 
// }) 

// app.post("/user",(req,res)=>{

//     // console.log("Data saved succcessfully");

//     console.log(req.body);
//     res.send("Data saved successfully"); 
// }) 

// app.listen(4000,()=>{
//     console.log("Hello kaise ho");
// })