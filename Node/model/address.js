const mongoose = require('mongoose');
const validate = require('mongoose-validator')
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
});

module.exports = User = mongoose.model('address', addressSchema);