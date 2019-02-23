const mongoose = require('mongoose')
let Cake = mongoose.model('Cake')
let Rate = mongoose.model('Rate')
let cake = require('../controllers/cakes.js')
module.exports = (app) => {
    app.get('/cakes', (req, res) => {
        cake.all(req, res);
    })

    app.post('/cake', (req, res) => {
        cake.new(req, res);
    })

    app.get('/cakes/:id', (req, res) => {
        cake.onlyOne(req, res);
    })

    app.post('/rating/:cakeId', (req, res) => {
        cake.addRating(req, res);
    })
}