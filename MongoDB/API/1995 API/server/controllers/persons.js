const mongoose = require('mongoose');
let Person = mongoose.model('Person')

module.exports = {
    show_all: (req, res) => {
        Person.find({}, (err, people) => {
            if (err) {
                res.json(err)
            } else {
                res.json(people)
            }
        }).sort({_id: -1})
    },
    show_one: (req, res) => {
        let personName = req.params.name
        Person.findOne({name: personName}, (err, person) => {
            if (err) {
                res.json(err);
            } else {
                res.json(person)
            }
        })
    },
    new: (req, res) => {
        let newPerson = req.params.name;
        person = new Person({name: newPerson})
        person.save((err) => {
            if (err) {
                res.json(err);
            } else {
                res.redirect('/')
            }
        })
        // Person.create({name: req.body.name}, (err) => {
        //     if (err) {
        //         res.json(err);
        //     } else {
        //         res.redirect('/')
        //     }
        // })
    },
    remove: (req, res) => {
        let person = req.params.name
        Person.remove({name: person}, (err) => {
            if (err) {
                res.json(err)
            } else {
                res.redirect('/')
            }
        })
    }
}