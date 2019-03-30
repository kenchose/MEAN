const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/anonymouse_notes');
require('./../models/note.js');