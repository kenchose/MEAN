const express = require('express');
const app = express();
// const bodyParser = require(body-parser);
// app.use(bodyParser.json());
// const path = require('path');
// app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(__dirname + '/public/dist/public'))
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/pokemon_api')

app.listen(1234, () => {
    console.log('Listening on port 1234')
})