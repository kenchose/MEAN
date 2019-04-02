const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/teamManager'))
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./dist/teamManager/index.html"))
  });
app.listen(7000, () => {
    console.log('Listening on port 7000 Product Manager')
})

