const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const mongoose = require('mongoose');

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)
app.listen(8000, () => {
    console.log('Listening on port 8000')
})