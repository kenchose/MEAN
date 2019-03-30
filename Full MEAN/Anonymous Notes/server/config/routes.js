let note = require('./../controllers/notes.js');

module.exports = (app) => {
    app.get('/notes', (req, res) => {
        note.all(req, res);
    })

    app.post('/note', (req, res) => {
        note.create(req, res);
    })
}