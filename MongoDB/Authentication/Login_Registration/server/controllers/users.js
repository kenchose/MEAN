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
        let newUser = new User(req.body);
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                console.log(err);
            } else {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    newUser.password = hash
                    console.log('New hash PW ==> ' + newUser.password);
                });
            }
        }); 
        newUser.save((err) => {
            if (err) {
                console.log('Cannot save new user', err);
                for(let key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/');
            } else {
                console.log(newUser);
                req.session.user_id = newUser._id
                req.session.first_name = newUser.first_name;
                req.session.email = newUser.email;
                res.render('home');
            }
        })
    },

    login: (req, res) => {
        User.findOne({email:req.body.email}, (err, user) => {
            if (!user) {
                console.log({message: 'This email is not registered!', err});
                res.redirect('/')
            } else {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if(result == true){
                        res.render('home')
                    } else {
                        console.log(err)
                        res.redirect('/')
                    }
                })
            }
        })
    },

    logout: (req, res) => {
        req.session.destroy()
        res.redirect('/')
    }
}