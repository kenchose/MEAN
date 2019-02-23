const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/rate_my_cake')
require('./../models/cake.js')