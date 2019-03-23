const mongoose = require('mongoose');
let bcrypt = require('bcryptjs')
var uniqueValidator = require('mongoose-unique-validator');
let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
let UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'First name is required']
    },
    last_name: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        required: [true, 'Must have an email'],
        unique: true, //the unique option for schemas is not a validator.
        validate: [{
            validator: (value) => {
                return emailRegex.test(value)
            }, msg:'Email must be in valid format.'
        }]
    },
    password: {
        type: String,
        required: [true, 'Must have a password'],
        // minlength: [8, 'Password must be at least 8 characters.'],
        validate: [{
            validator: (value) => {
                return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test( value );
            }, message: 'Minimum eight characters, at least one letter, one number and one special character.'
        }]
    }, 
    password_confirmation: {
        type: String,
        required: [true, 'Password confirmation is required.'],
        validate: {
            validator: (value) => {
                if(value == this.password) {
                    return value == this.password;
                }
            }, message: 'Password and password confirmation must match.'
        }
    },
    birthday: {
        type: Date,
        required: [true, 'Please enter your birthday.']
    }
}, {timestamps: true})

// UserSchema.plugin(require('mongoose-bcrypt')); //this will automatically hash password
UserSchema.plugin(uniqueValidator, {message:'Sorry, that email is already taken'});
mongoose.model('User', UserSchema);
