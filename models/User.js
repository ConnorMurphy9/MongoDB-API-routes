const { Schema, Types } = require('mongoose');
const mongoose = require('mongoose');
// Schema to create the User model
const userSchema = new mongoose.Schema(
{
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: "Thought"
    }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
    ref: "User"
  }
]
},

{
    toJSON: {
      virtuals: true,
    },
}
);

userSchema
.virtual('friendCount')
.get(function () {
  return `${this.friends.length}`;
})
const User = mongoose.model('user', userSchema);

module.exports = User;
