const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1995api');
require('./../models/person.js');