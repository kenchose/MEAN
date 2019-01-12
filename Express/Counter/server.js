const express = require('express');
const path = require('path');
const session = require('express-session')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/static')));
app.use(session({
    secret: 'kennyssecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    if (req.session.count) {
        req.session.count = req.session.count
    } else {
        req.session.count = 0;
    }
    res.render("index", {count: req.session.count});
})
app.post('/count', (req, res) => {
    if (req.session.count) {
        req.session.count += 1
    } else {
        req.session.count = 1;
    }
    console.log("POST DATA", req.body);
    res.redirect('/')
})
app.post('/double', (req, res) => {
    if (req.session.count) {
        req.session.count += 2
    } else {
        req.session.count = 2;
    }
    console.log(req.session.count)
    res.redirect('/')
})
app.post('/reset', (req, res) => {
    req.session.count = 0;
    res.redirect('/')
})
app.listen(8000, () => {
    console.log('Listening to port 8000')
})