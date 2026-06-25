const mongoose = require('mongoose');
const User = require('./UserSchema.js');

const todoListSchema = new mongoose.Schema({
    title: String,
    user:{
        type: Schema.Types.objectId,
        ref: 'User'
    }
});

module.export = mongoose.model('TodoLists', todoListSchema);