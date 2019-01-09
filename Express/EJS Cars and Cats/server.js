const express = require('express');
const app = express();
app.use(express.static(__dirname + '/static'))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/cars', (request, response) => {
    response.render('cars');
})
app.get('/cats', (request, response) => {
    response.render('cats');
})
app.get('/cars/new', (request, response) => {
    response.render('cars_new');
})
app.listen(8000, () => {
    console.log('Listening on port 8000')
});