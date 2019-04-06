const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teamManager');
require('./../models/player.js');