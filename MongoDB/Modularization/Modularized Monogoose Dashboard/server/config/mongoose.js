const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dashboard')
require('./../models/animal.js')
// mongoose.Promise = global.Promise;
