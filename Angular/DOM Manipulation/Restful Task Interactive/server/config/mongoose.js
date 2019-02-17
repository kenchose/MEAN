const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restful_task_api_crud')
require('./../models/task.js')