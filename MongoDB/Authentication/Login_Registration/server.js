const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('express-flash')
var session = require('express-session');

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'thisisasecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(7000, () => {
    console.log('Listening on port 7000');
})
