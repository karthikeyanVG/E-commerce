const mongoose = require('mongoose');
const validate = require('mongoose-validator')
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        index: true,
        sparse: true,
        validate: [
            validate({
                validator: 'isNumeric',
                arguments: [8, 14],
                message: 'Not a valid phone number.',
            })],
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);