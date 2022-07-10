const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    remaining_time: {
        type: Number,
    }
});

userSchema.plugin(validator);

module.exports = mongoose.model('User',userSchema);