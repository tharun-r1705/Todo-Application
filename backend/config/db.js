const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully Connected to MongoDB");
    }
    catch(error){
        console.log("Error Connecting to MongoDB");
        console.log("LOG: ", error);
    }
}

module.exports = connectDB;