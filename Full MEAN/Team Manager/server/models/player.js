const mongoose = require('mongoose');
let PlayerSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:[true, 'Name is required.'], 
        minlength:[2, 'Name must be at least 2 characters.']
    },
    position:{
        type:String,
        default:'Undecided'
    },
    games:{
        type: Object
    }
}, {timestamps:true});

mongoose.model('Player', PlayerSchema)