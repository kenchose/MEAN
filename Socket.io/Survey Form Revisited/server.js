const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/static')))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
const server = app.listen(8000, () => console.log('Listening on port 8000'));
const io = require('socket.io')(server);
// let counter = 0;

app.get('/', (req, res) => {
    res.render('index')
})

io.on('connection', (socket) => {
    socket.emit('greeting', {msg: 'Greetings, from server Node, brought to you by Sockets! -Server'})
    socket.on('thankyou', (data) => {
        console.log(data.msg);
    })
    socket.on('form_submission', (data) => { //socket.on listens for emitted information from the client and collects the data, socket.emit('form_submission')
        //form information that was submited
        console.log(`This information is coming from the submitted form: Name: ${data.name}, Location: ${data.location}, Language: ${data.language}, Comment: ${data.comment}`)
        socket.emit('server_emit', {response: data})
        // Second way to do it
        // socket.emit('server_emit', {name: data.name, location: data.location, language: data.language, comment: data.comment})
        socket.emit('random_number', {number: Math.floor(Math.random() * 1000 + 1)})
    })
})

