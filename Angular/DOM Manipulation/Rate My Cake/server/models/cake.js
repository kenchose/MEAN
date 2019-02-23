const mongoose = require('mongoose');

let RateSchema = new mongoose.Schema({
    rating: {
        type: Number
    },
    comment: {
        type: String,
        required:[true, 'Must leave a comment.'],
        minlength: [5, 'Comment must be 5 characters long.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps:true})

let CakeSchema = new mongoose.Schema({
    baker: {
        type: String, 
        required:[true, "Must have the baker's name."]
    },
    image: {
        type: String, 
        required:[true, "Must have an image of your cake."]
    },
    ratings: [RateSchema],
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: {
        type: Date, 
        default: Date.now
    }
}, {timestamps: true})

let Cake = mongoose.model('Cake', CakeSchema)
let Rate = mongoose.model('Rate', RateSchema)
