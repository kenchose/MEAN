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
    game:{
        type: Object,
        game1: 'Undecided',
        game2: 'Undecided',
        game3: 'Undecided'
    }
}, {timestamps:true});

mongoose.model('Player', PlayerSchema)