const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const registerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    rentedItems: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        rentalStart: {
            type: Date,
            required: true
        },
        rentalEnd: {
            type: Date,
            required: true
        }
    }]
});

registerSchema.plugin(passportLocalMongoose);
const Register = mongoose.model('Register', registerSchema);
module.exports = Register;
