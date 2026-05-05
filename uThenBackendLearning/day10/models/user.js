const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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


userSchema.methods.getJWT = function(){
    const ans = jwt.sign({_id:this._id , emailid:this.emailid},process.env.SECRET_KEY,{expiresIn:'7d'});
    return ans;
}

userSchema.methods.verifypassword = async function(userpassword){

    const ans = await bcrypt.compare(userpassword, this.password);
    return ans;

}





const user = mongoose.model('user', userSchema);

module.exports = user;