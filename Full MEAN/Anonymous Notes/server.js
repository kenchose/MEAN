const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.json());
app.use(express.static(__dirname + './public/dist/public'));
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app);

app.listen(1234, () => {
    console.log("Anonymouse listening on port 1234")
})