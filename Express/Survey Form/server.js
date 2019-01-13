const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/static')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})
app.post('/result', (req, res) => {
    let info = {
        name: req.body.name,
        language: req.body.language, 
        location: req.body.location,
        comment: req.body.comment
    }
    res.render('result', {user: info});
})
app.listen(8000, () => {
    console.log('Listening to port 8000')
})