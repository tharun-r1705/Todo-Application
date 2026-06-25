const User = require('../models/UserSchema.js');

const SignIn = async(req, res) => {
    try{
        const person = User.findOne({email: req.body.email});

        if(!person){
            console.log("The User not exists");
        }
        
        const isMatch = await User.comparePassword(person.password);
        if(isMatch){
            console.log("Successfully Logged In");
        }
        return person;
    }catch(error){
        console.log("Error In Sign In Controller: ", error);
    }
}

const LogOut = async(req, res) => {

}

const SignUp = async(req, res) => {
    try{
        const person = await User.findOne({email: req.body.email});
        
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

module.exports = {
    LogOut,
    SignIn, 
    SignUp
}