const { Schema, Types } = require('mongoose');
// require reaction here?
const mongoose = require('mongoose');
const Reaction = require('./Reaction');
const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // Use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [Reaction],
    

    }
);

const Thought = mongoose.model('thought', thoughtSchema);

module.exports = Thought;