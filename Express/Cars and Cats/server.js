let express = require('express');
let app = express();
app.use(express.static(__dirname + '/static'));
// app.use(express.static(__dirname + '/static/images'));

app.get('/', (request, response)=> {
    response.send("Hello there")
})
app.get('/cars.html', (request, response) => {
})

app.get('/cats.html', (request, response) => {
})

app.get('/form.html', (request, response) => {
})

app.listen(8000, () => {
    console.log('Listening on port 8000')
})