const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    type:String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = mongoose.model("Link", linkSchema);