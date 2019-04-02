let user = require('./../controllers/users.js')
module.exports = (app) => {
    app.get('/players/list', (req, res) => {
        user.all(req, res);
    })

    app.delete('/player/'+id, (req, res) => {
        user.delete(req, res);
    })
}