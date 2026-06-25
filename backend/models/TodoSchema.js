const mongoose = require('mongoose');
const Todo = require('./TodoListSchema.js');

const todoSchema = new mongoose.Schema({
    list: {
        type: Schema.Types.objectId,
        ref: 'Todo',
    },
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
    },
    status: {
        type: String,
        enum: ['completed', 'pending'],
        default: 'pending'
    }
});

module.exports = mongoose.model("Todo", todoSchema);