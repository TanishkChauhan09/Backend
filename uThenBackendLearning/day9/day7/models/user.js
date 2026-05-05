const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    },
    lastname:{
        type:String
    },
    age:{
        type:Number,
        min:14,
        max:70,
        required:true
    },
    gender:{
        type:String,
        // enum :["male","female","others"]
        validate(value){
            if(!["male","female","others"].includes(value))
                throw new Error("Invalid Gender");
        }
    },
    emailid:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        immutable:true
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"This is a default photo",
    }

 },{timestamps:true})

    const user = mongoose.model('user', userSchema);

    module.exports = user;