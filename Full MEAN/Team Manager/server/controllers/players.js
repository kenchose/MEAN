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

    // updatePlayer: (req, res) => {
    //     id = req.params.id
    //     Player.findByIdAndUpdate({_id: id}, (err, player) => {
    //         if (err) {
    //             res.json({message: 'Sorry, there was an error finding player', error: err});
    //         } else {
    //             let playerUpdate = {
    //                 game1: 'Playing'
    //             }
    //             Player.update({_id: req.params.id}, playerUpdate, {upsert: true}, (err) => {
    //                 console.log('Player status', player)
    //                 // if (err) {
    //                 //     res.json({message: 'Sorry, there was an error updating this player', error: err});
    //                 // } else {
    //                 //     res.json({message: 'Player has been updated!', player: playerUpdate})
    //                 // }
    //             })
            // }
        // })
    // },
        updatePlayer: (req, res) => {
        id = req.params.id
        playing = req.params.playing
        game = req.params.game
        console.log('id of new player', id, playing)
        Player.findById({_id: id}, (err, player) => {
            if (err) {
                res.json({message: 'Sorry, there was an error finding player', error: err});
            } else {
                let playerUpdate = {
                    game1: playing,
                    game2: playing,
                    game3: playing
                }
                // Player.update({_id: req.params.id}, playerUpdate, {$set:{game1:[playerUpdate.game1]}}, (err) => {
                Player.update({_id: req.params.id}, playerUpdate, {upsert: true}, (err) => {
                    console.log('Player status', player)
                    if (err) {
                        res.json({message: 'Sorry, there was an error updating this player', error: err});
                    } else {
                        res.json({message: 'Player has been updated!', player: playerUpdate})
                    }
                })
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