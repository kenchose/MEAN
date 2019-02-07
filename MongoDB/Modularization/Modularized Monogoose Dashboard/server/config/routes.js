const mongoose = require('mongoose');
let Animal = mongoose.model('Animal')
let animals = require('../controllers/animals.js')
module.exports = (app) => {
    app.get('/', (req, res) => {
        animals.index(req, res);
    })
    
    // Create a new animal
    app.post('/animals', (req, res) => {
        animals.create(req, res);
    })
    
    // Show ONE animal 
    app.get('/show/:id', (req, res) => {
        animals.show(req, res);
    })
    
    // Render create animal page
    app.get('/animal/new', (req, res) => {
        animals.create_page(req, res);
    })
    
    // Edit animal
    app.get('/animal/edit/:id', (req, res) => {
        animals.edit(req, res);
    })
    
    // Update animal 
    app.post('/update_animal/:id', (req, res) => {
        animals.update(req, res);
    })
    
    // Delete aniaml
    app.post('/animal/destroy/:id', (req, res) => {
        animals.delete(req, res);
    })
}