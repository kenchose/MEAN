const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/anonymous_notes');
require('./../models/user.js');