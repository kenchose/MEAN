const mongoose = require('mongoose');
let Note = mongoose.model('Note');

module.exports = {
    all: (req, res) => {
        Note.find({}, (err, notes) => {
            if(err){
                res.json({error: 'Could not get all notes', err});
            } else {
                // let date = new Date(notes.createdAt)
                // date.toDateString()
                res.json({message:'Got all notes', notes});
            }
        }).sort({_id:-1})
    },

    create: (req, res) => {
        let newNote = new Note(req.body);
        newNote.save((err, note) => {
            if(err){
                // let errors=[];
                // for(let key in err.errors){
                //     error.push(err.errors[key].messages)
                // }
                res.json({error: 'Error saving new note', err});
            } else {
                let myMoment= moment.Moment = moment(data);
                // let date = note.createdAt;
                // let d = date.getDate()
                console.log('from controller', myMoment)
                res.json({message: 'Saved new note', note, d})
            }
        })
    }
}