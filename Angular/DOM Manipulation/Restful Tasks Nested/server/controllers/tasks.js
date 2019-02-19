const mongoose = require('mongoose');
let Task = mongoose.model('Task')
module.exports = {
    all: (req, res) => {
        Task.find({}, (err, task) => {
            if (err) {
                res.json({message: 'Sorry, there was an error', error: err});
            } else {
                res.json({message: 'Success', task})
            }
        }).sort({_id: -1})
    },
    onlyOne: (req, res) => {
        id = req.params.id
        let onlyTask = Task.findById({_id: id}, (err, onlyTask) => {
            if (err) {
                res.json({message: 'Sorry, there was an error', error: err});
            } else {
                res.json(onlyTask)
            }
        })
    },
    new: (req, res) => {
        console.log("REQUEST", req.body.title)
        let newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        })
        newTask.save((err) => {
            if (err) {
                res.json({message: 'There was an error', error: err});
            } else {
                res.json({message:'Success', task: newTask})
            }
        })
    },
    update: (req, res) => {
        id = req.params.id
        Task.findById({_id: id}, (err, task) => {
            if (err) {
                res.json({message: 'Sorry, there was an error', error: err});
            } else {
                console.log('Task ID and title', task.id, task.title);
                let taskUpdate = {
                    title: req.body.title,
                    description: req.body.description,
                    completed: req.body.completed
                }
                Task.update({_id: req.params.id}, taskUpdate, {upsert: true}, (err) => {
                    if (err) {
                        res.json({message: 'Sorry, there was an error updating this task', error: err});
                    } else {
                        res.json({message: 'Task has been updated!', task: taskUpdate})
                    }
                })
            }
        })
    },
    delete: (req, res) => {
        Task.remove({_id: req.params.id}, (err) => {
            if (err) {
                res.json({message:'There was an error deleting this task', error: err});
            } else {
                res.json({message: 'Task was successfully deleted'})
            }
        })
    }
}