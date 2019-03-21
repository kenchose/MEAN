let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');
let User = mongoose.model('User');

module.exports = {
    index: (req, res) => {
        res.render('index');
    },

    home: (req, res) => {
        if(!req.session.user_id) {
            res.redirect('/');
        } else {
            res.render('home');
        }
    },

    create: (req, res) => {
        console.log("Creatred new user", req.body);
        let newUser = new User(req.body);
        newUser.password = newUser.generateHash(newUser.password);
        // req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)) 
        newUser.save((err) => {
            if (err) {
                console.log('Cannot save new user', err);
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/');
            } else {
                req.session.user_id = newUser._id
                console.log(newUser._id);
                res.render('home');
            }
        })
    },

    // login: (req, res) => {
    //     User.findOne({email: req.body.email, password: req.body.password}, (req, user) => {
    //         console.log("req.body.email = " + req.body.email);
    //         console.log("This is the dbuser.email response", user);
    //         if (err) {
    //             res.redirect('/');
    //         } else {
    //             req.session.user_id = user._id;
    //             req.session.email = user.email;
    //             res.render('home')
    //         }
    //     })
    // }
}