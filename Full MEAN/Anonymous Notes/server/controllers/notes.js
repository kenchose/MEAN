const mongoose = require('mongoose');
let Note = mongoose.model('Note');

module.exports = {
    all: (req, res) => {
        Note.find({}, (err, notes) => {
            if(err){
                res.json({error: 'Could not get all notes', err});
            } else {
                res.json({message:'Got all notes', notes});
            }
        }).sort({_id:-1})
    },

    create: (req, res) => {
        let newNote = new Note(req.body);
        newNote.save((err, note) => {
            if(err)
                res.json({error: 'Error saving new note', err});
            } else {
                res.json({message: 'Saved new note', note, d})
            }
        })
    }
}
