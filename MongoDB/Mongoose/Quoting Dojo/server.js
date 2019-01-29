const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash')
const moment = require('moment')
// const validate = require('mongoose-validator')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.use(flash());
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(session({secret: "codingdojorocks"}));


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;
// let nameValidator = [
//     validate({
//         validator: isEmpty,
//         message: 'Name field cannot be empty.'
//     })
// ]

// let quoteValidator = [
//     validate({
//         validator: isEmpty,
//         message: 'Quote field cannot be empty.'
//     })
// ]
let QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true }, 
    quote: { type: String, required: true, minlength: 8 }
}, { timestamps: true })
mongoose.model('Quote', QuoteSchema);
let Quote = mongoose.model('Quote');

app.get('/', (req, res) => {
    // User.find({}, (err, users) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         res.render('index', {user:users})
    //     }
    // })
    res.render('index')
})

app.post('/myquote', (req, res) => {
    let newquote = new Quote({
        name: req.body.name,
        quote: req.body.quote
    })
    newquote.save((err) => {
        if (err) {
            console.log('We have an error!!!', err);
            for (let key in err.errors) {
                req.flash('quotes', err.errors[key].message)
            }
            res.redirect('/')
        } else {
            res.redirect('/quotes')
        }
    })
})

app.get('/quotes', (req, res) => {
    Quote.find({}, (err, users) => {
        if (err) {
            console.log(err)
        }
        else {
            res.render('quotes', {user:users, moment:moment})
        }
    }).sort({_id: -1})
})

app.listen(8000, () => {
    console.log('Listening on port 8000')
})