const mongoose = require('mongoose')
let Task = mongoose.model('Task')
let task = require('../controllers/tasks.js')
module.exports = (app) => {
    app.get('/tasks', (req, res) => {
        task.all(req, res);
    })

    app.get('/tasks/:id', (req, res) => {
        task.onlyOne(req, res);
    })

    app.post('/task', (req, res) => {
        task.new(req, res);
    })

    app.put('/tasks/:id', (req, res) => {
        task.update(req, res);
    })

    app.delete('/tasks/:id', (req, res) => {
        task.delete(req, res);
    })
}