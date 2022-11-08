const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create the User model
const userSchema = new Schema(
{
    username: {
        type: String,
        required: true,
        // unique?
        // trimmed?
    },
    email: {
        type: String,
        required: true,
          // unique?
        //   must match a valid email address? look into "matching validation" on mongoose docs
    },
    thoughts: [thoughtSchema],
},
{
    toJSON: {
      getters: true,
    },
}
);

const User = model('user', userSchema);

module.exports = User;
