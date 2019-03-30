const mongoose = require('mongoose')

let NoteSchema = new mongoose.Schema({
    content: {
        type: String, 
        required:[true, 'Field is required.'],
        minlength: [3, 'Must be at least 3 characters.']
    }}, {timestamps:true});

mongoose.model('Note', NoteSchema);