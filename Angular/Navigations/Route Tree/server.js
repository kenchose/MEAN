const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

app.listen(8000, ()=>{
    console.log('Listening on port 8000 Route Tree')
})