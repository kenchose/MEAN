const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(1234, () => {
    console.log('Listening anonymouse on 1234');
})