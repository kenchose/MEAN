const mongoose = require('mongoose');
let PlayerSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:[true, 'Name is required.'], 
        minlength:[2, 'Name must be at least 2 characters.']
    },
    position:{
        type:String
    },
    game1:{
        type:String,
        default:'Undecided'
    },
    game2:{
        type:String,
        default: 'Undecided'
    },
    game3:{
        type:String,
        default:'Undecided'
    }
}, {timestamps:true});

mongoose.model('Player', PlayerSchema)