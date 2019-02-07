const mongoose = require('mongoose');

let Animal = mongoose.model('Animal');

module.exports = {
    index: (req, res) => {
        Animal.find({}, (err, animals) => {
            if (err) {
                console.log("There was an error finding all the animals.", err);
                // res.redirect('index')
                res.redirect('/')
            } else {
                // animals.reverse(); use reverse method to show most recent animal added
                res.render('index', {all_animals: animals})
            }
        })
    },
    create: (req, res) => {
        let animal = new Animal(req.body); //animal = collections
        animal.save((err) => {
            if (err) {
                console.log('Oh no!!! There was a problem saving the animal to the database!!!', err);
                res.redirect('/')
            } else {
                res.redirect('/')
            }
        })
    },
    create_page: (req, res) => {
        res.render('new')
    },
    show: (req, res) => {
        Animal.findOne({_id: req.params.id}, (err, animal) => {
            if (err) {
                console.log('There was an error showing this animal', err);
            } else {
                res.render('show', {animal: animal})
            }
        })
    },
    edit: (req, res) => {
        Animal.findOne({_id: req.params.id}, (err, animal) => {
            if (err) {
                console.log('Cannot find the animal', err)
            } else {
                res.render('edit', {animal: animal})
            }
        });
    },
    update: (req, res) => {
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
    },
    delete: (req, res) => {
        Animal.remove({_id: req.params.id}, (err) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/')
            }
        })
    }
}