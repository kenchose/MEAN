const mongoose = require('mongoose');
let Cake = mongoose.model('Cake')
let Rate = mongoose.model('Rate')
module.exports = {
    all: (req, res) => {
        Cake.find({}, (err, cake) => {
            if (err) {
                res.json({message: 'Sorry, there was an error', error: err});
            } else {
                res.json({message: 'Success', cake: cake})
            }
        }).sort({_id: -1})
    },
    new: (req, res) => {
        let cake = new Cake(req.body);
        cake.save((err, savedCake) => {
            if (err) {
                res.json({message: 'Cannot save cake', err});
            } else {
                res.json({message: 'New cake', savedCake});
            }
        })
    },
    onlyOne: (req, res) => {
        id = req.params.id;
        Cake.findById({_id: id}, (err, onlyOne) => {
            if (err) {
                res.json('Cannot find cake', err);
            } else {
                res.json('Found cake', onlyOne);
            }
        })
    },
    addRating: (req, res) => {
        console.log(req.body);
        id = req.params.id;
        let rate = new Rate(req.body);
        rate.save((err, rateSaved) => {
            if (err) {
                res.json({message: "Cannot save ratings.", err});
            } else {
                Cake.findOneAndUpdate({_id: id}, {$push: {rateSaved}}, (err, saved) => {
                    if (err) {
                        res.json({message: "Couldn't update cake", err});
                    } else {
                        res.json({message: "Successfully updated cake", saved});
                    }
                })
            }
        })
    }
}