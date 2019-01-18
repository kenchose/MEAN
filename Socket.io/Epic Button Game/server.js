const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/static')))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
const server = app.listen(9000, () => console.log('Listening on port 9000'));
const io = require('socket.io')(server);

app.get('/', (req, res) => res.render('index'))


io.on('connection', (socket) => {
  let count = 0
  socket.on('add_count',(data) => {
    count++
    socket.emit('update_count', {count:count})
  })
  socket.on('restart', (data) => {
      count = 0
      socket.emit('update_count', {count:count})
  })
})