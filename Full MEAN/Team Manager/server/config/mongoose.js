const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teamManager');
require('./../models/user.js');