let player = require('./../controllers/players.js')
module.exports = (app) => {
    app.get('/players/list', (req, res) => {
        player.all(req, res);
    })

    app.post('/create', (req, res) => {
        player.addPlayer(req, res);
    })

    app.delete('/player/:id', (req, res) => {
        player.delete(req, res);
    })
}