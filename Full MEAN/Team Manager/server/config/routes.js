let player = require('./../controllers/players.js')
module.exports = (app) => {
    app.get('/players/list', (req, res) => {
        player.all(req, res);
    })

    app.post('/create', (req, res) => {
        player.addPlayer(req, res);
    })

    // app.put('/player/:playing/:id', (req, res) => {
    //     player.updatePlayer(req, res);
    // })

    app.put('/player/:playing/:id/game1', (req, res) => {
        player.updatePlayerGame1(req, res);
    })

    app.put('/player/:playing/:id/game2', (req, res) => {
        player.updatePlayerGame2(req, res);
    })

    app.put('/player/:playing/:id/game3', (req, res) => {
        player.updatePlayerGame3(req, res);
    })

    app.delete('/player/:id', (req, res) => {
        player.delete(req, res);
    })
}