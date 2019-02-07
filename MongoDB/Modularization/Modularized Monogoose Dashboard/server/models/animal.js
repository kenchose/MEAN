const mongoose = require('mongoose');

let AnimalSchema = new mongoose.Schema({
    animal: {type: String, required: true},
    name: { type: String, required: true}, 
    age: { type: Number },
    color: { type: String },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now}
}, {timestamps: true});
mongoose.model('Animal', AnimalSchema);
