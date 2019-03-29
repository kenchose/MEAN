const mongoose = requrie('mongoose');

let NoteSchema = new mongoose.Schema({
    content:{
        type:String, 
        required:[true, 'Content cannot be empty'], 
        minlength:[3, 'Content must be more than 3 characters.']
    }
}, {timestamps:true})

mongoose.model('Note', NoteSchema);