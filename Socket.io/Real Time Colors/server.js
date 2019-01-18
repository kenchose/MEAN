const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs')
const server = app.listen(8000, () => console.log('Listening on port 8000'));
const io = require('socket.io')(server);

app.get('/', (req, res) => res.render('index'))

io.on('connection', (socket) => {
    socket.on('change_color', (data) => {
        console.log(data.color)
        socket.broadcast.emit('update_color', {new_color: data.color})
        socket.emit('update_color', {new_color: data.color})
    })
})