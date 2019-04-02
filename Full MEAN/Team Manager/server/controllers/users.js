const mongoose = require('mongoose');
let User = mongoose.model('User');
module.exports = {
    all: (req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                res.json({error:'Could not find users', err});
            } else {
                res.json(users);
            }
        })
    },

    delete: (req, res) => {
        User.remove({_id: req.params.id}, (err, player) => {
            if (err) {
                res.json({message:'Could not delete player', error: err});
            } else {
                res.json({message:"Successfully deleted player", player})
            }
        })
    }
}