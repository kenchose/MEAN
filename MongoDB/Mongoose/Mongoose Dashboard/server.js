const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard')
mongoose.Promise = global.Promise;

let AnimalSchema = new mongoose.Schema({
    animal: {type: String, required: true},
    name: { type: String, required: true}, 
    age: { type: Number },
    color: { type: String },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now}
}, {timestamps: true});
mongoose.model('Animal', AnimalSchema);
let Animal = mongoose.model('Animal')


// Show all animals
app.get('/', (req, res) => {
    Animal.find({}, (err, animals) => {
        if (err) {
            console.log("There was an error finding all the animals.", err);
            res.redirect('/')
        } else {
            res.render('index', {all_animals: animals})
        }
    })
})

// Create a new animal
app.post('/animals', (req, res) => {
    let animal = new Animal(req.body);
    animal.save((err) => {
        if (err) {
            console.log('Oh no!!! There was a problem saving the animal to the database!!!', err);
            res.redirect('/')
        } else {
            res.redirect('/')
        }
    })
})

// Show ONE animal 
app.get('/show/:id', (req, res) => {
    Animal.findOne({_id: req.params.id}, (err, animal) => {
        if (err) {
            console.log('There was an error showing this animal', err);
        } else {
            res.render('show', {animal: animal})
        }
    })
})

// Render create animal page
app.get('/animal/new', (req, res) => {
    res.render('new');
})

// Edit animal
app.get('/animal/edit/:id', (req, res) => {
    Animal.findOne({_id: req.params.id}, (err, animal) => {
        if (err) {
            console.log('Cannot find the animal', err)
        } else {
            res.render('edit', {animal: animal})
        }
    });
})

// Update animal 
app.post('/update_animal/:id', (req, res) => {
    console.log(req.body.name)
    let updateAnimal = { 
        name: req.body.name, 
        age: req.body.age,
        color: req.body.color
    }
    Animal.update({_id: req.params.id}, updateAnimal, {upsert: true}, (err) => { 
    //When you execute an update() with upsert: true and the query matches no existing document, MongoDB will refuse to insert a new document if the query specifies conditions on the _id field using dot notation and MongoDB will raise an error.
        if (err) {
            console.log('Cannot save the update');
        } else {
            console.log('Successfully updated animal')
            res.redirect('/')
        }
    })
    // SECOND OPTION OF HOW TO UPDATEING A DOCUMENT
    // Animal.findOne({_id: req.params.id}, (err, animal) => {
    //     animal.animal = req.body.animal
    //     animal.name = req.body.name
    //     animal.age = req.body.age
    //     animal.color = req.body.color
    //     animal.save(err)
    //     if (err) {
    //         console.log('Cannot update the animal');
    //     } else {
    //         res.redirect('/')
    //     }
    // })
})

app.post('/animal/destroy/:id', (req, res) => {
    Animal.remove({_id: req.params.id}, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/')
        }
    })
})

app.listen(8000, () => {
    console.log('Listening to port 8000')
})