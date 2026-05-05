const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
        firstName:{
            type:String,
            require:true,
            minlenght:3,
            maxlength:20
        },
        lastName:{
            type:String,
            minlenght:3,
            maxlength:20
        },
        emailId:{
            type:String,
            require:true,
            unique:true,
            trim:true,
            lowercase:true,
            immutable:true,
        },
        age:{
            type:Number,
            min:10,
            max:80
        },
        role:{
            type:String,
            enum:['user','admin'],
            default:'user',
        } ,
        problemsolved:{
            type:[String]
        }
    },{
        timestamps:true,
    }
)

 const User = mongoose.model("user",userSchema);
 module.exports = User;
