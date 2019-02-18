const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String, default: ''},
    completed: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
}, {timestamps: true})

mongoose.model('Task', TaskSchema);
let Task = mongoose.model('Task')