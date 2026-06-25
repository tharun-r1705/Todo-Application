const mongoose = require('mongoose');
const TodoListSchema = require('./TodoListSchema.js');

const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String, 
        required: [true, "Password is Required"],
        minlenght: [6, "The password must be greater than 6 characters"],
        select: false,
    },
});

module.exports = mongoose.model("User", userSchema);