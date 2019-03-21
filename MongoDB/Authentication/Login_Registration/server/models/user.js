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
        minlength: [8, 'Password must be at least 8 characters.'],
        validate: {
            validator: (value) => {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{2,32}/.test( value );
            }, message: 'Password must contain a number, special character, and uppsercase letter.'
        }
    }, 
    // password_confirmation: {
    //     type: String,
    //     required: [true, 'Password confirmation is required.'],
    //     validate: [{
    //         validator: (value) => {
    //             return value == this.password;
    //         }, message: 'Password and password confirmation must match.'
    //     }]
    // },
    birthday: {
        type: Date,
        required: [true, 'Please enter your birthday.']
    }
}, {timestamps: true})

UserSchema.methods.generateHash = (password) =>  {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
// UserSchema.pre('save', (done) => {
//     var hashedpw = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
//     this.password = hashedpw;
//     this.password_confirm = undefined;
//     done();
// ;})
UserSchema.plugin(uniqueValidator, {message:'Sorry, that email is already taken'});
mongoose.model('User', UserSchema);
