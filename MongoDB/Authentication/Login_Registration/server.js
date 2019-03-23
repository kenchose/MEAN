const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt-as-promised')
const app = express();
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))
const flash = require('express-flash')
app.use(flash())
const session = require('express-session')
app.set('trust proxy', 1) //trust first proxy
app.use(session({
    secret: 'thisisasecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/login_registration')
mongoose.Promise = global.Promise;

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
        unique: true,
        validate: {
            validator: (value) => {
                return emailRegex.test(value)
            }
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters'],
        validate: {
            validator: (value) => {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{2,32}/.test( value );
            }, message: 'Password must contain at least 1 number, 1 special character, and 1 uppsercase letter.'
        }
    },
    password_confirmation: {
        type: String,
        required: [true, 'Password confirmation is required.'],
        validate: {
            validator: (value) => {
                return value == this.password;
            }, message: 'Password must match.'
        }
    },
    birthday: {
        type: Date,
        required: [true, 'Please enter your birthday.']
    }
}, {timestamps: true}) 
mongoose.model('User', UserSchema);

app.get ('/', (req, res) => {
    res.render('index')
})


app.listen(6789, () => {
    console.log('Listening on port 6789')
})
