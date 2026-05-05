// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'codethon';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('user');

//   // the following code examples can be pasted here...

//   const findResult = await collection.find({}).toArray();
//   console.log('Found documents =>', findResult);

//   const insertResult = await collection.insertOne({name:"Joe",age:22,balance:500});
//   console.log('Inserted documents =>', insertResult);

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());


// ******************************************************************************

const mongoose = require('mongoose');
const { Schema } = mongoose;
 
async function main(){

   await mongoose.connect("mongodb://localhost:27017/BookStore");

//    code for schema
    const username = new Schema({
        name:String,
        age:Number,
        city:String,
        Gender:String
    })

    // Model create kro === Collection ko create kro
   const user = mongoose.model("user",username);

    // collection ka document or class ka instace(object)
    const user1 = new user({name:"Rohan",age:20,city:"NY",Gender:"Male"});
    await user1.save(); 

    await user.create({name:"sohan",city:"CT",age:22});
}

main()
  .then(()=>console.log("Connected to database"))
  .catch((err)=>console.error(err));
  