const express = require('express');
const app = express();
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/cats', (request, response) => {
    response.render('cats')
})
app.get('/cuddles', (request, response) => {
    let cuttles_details = {
        name: 'Cuddles',
        pic: 'images/spaceKitty.jpeg',
        food: 'Sprinkles', 
        age: 1, 
        spots: ["My owner's lap",'Couch']
    }
    response.render('details', {cat: cuttles_details});
})
app.get('/muffins', (request, response) => {
    let muffins_details = {
        name: 'Muffins',
        pic: 'images/tubeTheNube.jpeg',
        food: 'Fish', 
        age: 4, 
        spots: ['Outside', 'Under the blanket']
    }
    response.render('details', {cat: muffins_details});
})
app.get('/tux', (request, response) => {
    let tux_details = {
        name: 'Tux',
        pic: 'images/cat1.jpg',
        food: 'Meatballs', 
        age: 1, 
        spots: ['Kitchen counter', 'Top of the fridge'
        ]
    }
    response.render('details', {cat: tux_details});
})
app.listen(8000, () => {
    console.log("Listening on port 8000");
})