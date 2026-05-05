const jwt = require('jsonwebtoken');
const user = require("../models/user");

const userAuth = async(req,res,next)=>{

    try{

        const {token} = req.cookies;
        
        if(!token)
        {
            throw new Error("Token doesn't exists");
        }
         
        const payload = jwt.verify( req.cookies.token,process.env.SECRET_KEY);
        //  console.log(payload);
        const {_id} = payload;

        if(!_id){
            throw new Error("Id is missing");
        }

        const result = await user.findById(_id);

        if(!result){
            throw new Error("User doesn't exists"); 
        }
        req.result = result;

        next();

    }
    catch(err){
        res.send('Error '+err.message);
    }
}

module.exports = userAuth;