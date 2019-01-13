const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser')

app.use(session({
    secret: 'mylittlesecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(express.static(path.join(__dirname, '/static')));
app.use(bodyParser.urlencoded( {extended: true }));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

let new_number = Math.floor(Math.random() * 101);
app.get('/', (req, res) => {
    if (!req.session.num) {
         output = {
            status: 'start',
            msg: '',
            form: 'hidden'
        } 
    } else {
        if (req.session.num < new_number) {
             output = {
                status: 'incorrect',
                msg: 'Too low!!!',
                form: 'hidden'
            }
        } else if (req.session.num > new_number) {
             output= {
                status: 'incorrect',
                msg: 'Too high!!!',
                form: 'hidden'
            }
        } else {
             output = {
                status: 'correct',
                msg: new_number + ' was the number!!!',
                form: 'show'
            }
        }
    }

    console.log(new_number)
    console.log(req.session.num)
    res.render('index', { output: output });
})
app.post('/guess', (req, res) => {
    req.session.num = req.body.number
    res.redirect('/')
})
app.post('/reset', (req, res) => {
    new_number = Math.floor(Math.random() * 101);
    req.session.num = 0;
    res.redirect('/')
})
app.listen(8000, () => {
    console.log('Listening on port 8000')
})