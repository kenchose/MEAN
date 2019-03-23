let users = require('../controllers/users.js')
module.exports = (app) => {
    app.get('/', (req, res) => {
        users.index(req, res);
    })
                        
    app.post('/register', (req, res) => {
        users.create(req, res);
    })
                     
    app.post('/sessions', (req, res) => {
        users.login(req, res);
    })

    app.get('/home', (req, res) => {
        users.home(req, res);
    })

    app.post('/logout', (req,res) => {
        users.logout(req, res);
    })

}

