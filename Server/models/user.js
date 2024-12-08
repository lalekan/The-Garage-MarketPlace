const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    },
    listings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
    }],
    bio: {
        type: Text
    },
    messages: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Message' 
    }],
},
    {timestamps: true}
);

const User = mongoose.model('User', userSchema);
module.exports = User;