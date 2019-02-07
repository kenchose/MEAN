let mongoose = require('mongoose');

let PersonSchema = new mongoose.Schema({
    name: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
}, {timestamps: true})

mongoose.model('Person', PersonSchema)

let Person = mongoose.model('Person')