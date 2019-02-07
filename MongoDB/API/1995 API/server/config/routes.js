const mongoose = require('mongoose');
let Person = mongoose.model('Person')
let people = require('../controllers/persons.js')
module.exports = (app) => {
    app.get('/', (req, res) => {
        people.show_all(req, res);
    })
    
    app.get('/new/:name', (req, res) => {
        people.new(req, res);
    })
    
    app.get('/remove/:name/', (req, res) => {
        people.remove(req, res);
    })
    
    app.get('/:name', (req, res) => {
        people.show_one(req, res);
    })
}