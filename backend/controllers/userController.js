const User = require('../models/UserSchema.js');

const SignUp = async(req, res) => {
    try{
        const person = await User.findOne({email});
        
        if(person){
            console.log("The user already exists");
            return;
        }
        
        const newUser = await User.save(person);
        return newUser;   

    }catch(error){
        console.log("Error in SignUp page: ", error);
    }
}