const mongoose = require('mongoose');
const TodoListSchema = require('./TodoListSchema.js');
const bcrypt = require('bcrypt');

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

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.comparePassword = async (candidatePassword) => {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}

module.exports = mongoose.model("User", userSchema);