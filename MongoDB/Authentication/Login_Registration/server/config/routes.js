let users = require('../controllers/users.js')
module.exports = (app) => {
    app.get('/', (req, res) => {
        console.log('got online')
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

    // app.get('/login', (req, res) => {
    //     users.login(req, res);
    // })
}

