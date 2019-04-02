const mongoose = require('mongoose');
let UserSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:[true, 'Name is required.'], 
        minlength:[2, 'Name must be at least 2 characters.']
    },
    position:{
        type:String,
        default:'Undecided'
    }
}, {timestamps:true});

mongoose.model('User', UserSchema)