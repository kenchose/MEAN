const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user');
require('./../models/user.js')