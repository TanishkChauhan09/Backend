const validator = require('validator');

function validateuser(data){

    const mandatoryfield = ["firstname","emailid","age","password"];

    const isAllowed = mandatoryfield.every((k)=> Object.keys(data).includes(k));

    if(!isAllowed)
        throw new Error("Reqired fields are missing");

    // validate email
    if(!validator.isEmail(data.emailid))
        throw new Error("Invalid emailID");

    // Validating password
    if(!validator.isStrongPassword(data.password))
        throw new Error("Make Strong Password");

    // Validating first name
    if(!(data.firstname.length>=3 && data.firstname.length<=20))
        throw new Error("First name b/t 3 to 20 char only");


}

module.exports = validateuser;