const { Schema, Types } = require('mongoose');
// Not sure if I will need this, also may need to require thought instead
// const userSchema = require('./User');

// Schema to create the array of nested documents referenced to in User.js
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },

    }
);



reactionSchema
.virtual('reactionCount')
// Getter
.get(function () {
    return `${this.first} ${this.last}`;
  })