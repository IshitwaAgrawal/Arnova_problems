const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');

const msgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: true
    }
});

msgSchema.plugin(validator);

module.exports = mongoose.model('Messages',msgSchema);