const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)
app.listen(8000, () => {
    console.log('Listening to port 8000')
})