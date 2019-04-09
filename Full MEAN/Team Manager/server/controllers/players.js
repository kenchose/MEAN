const mongoose = require('mongoose');
let Player = mongoose.model('Player');
module.exports = {
    all: (req, res) => {
        Player.find({}, (err, players) => {
            if (err) {
                res.json({message:'Could not find players', err});
            } else {
                res.json({message: 'Found all players', players});
            }
        })
    },

    addPlayer: (req, res) => {
        let newPlayer = new Player(req.body);
        newPlayer.save((err, player) => {
            if (err) {
                res.json({error: 'Could not add new player', err})
            } else {
                res.json({success: 'Player successfully added', player})
            }
        })
    },

    delete: (req, res) => {
        id = req.params.id;
        Player.remove({_id: id}, (err, player) => {
            if (err) {
                res.json({message:'Could not delete player', err});
            } else {
                res.json({success: 'Successfully deleted player', player})
            }
        })
    }
}