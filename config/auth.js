const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = function(passport) {
    passport.serializeUser(function(user, next) {
            next(null, user);
    });

    passport.deserializeUser(function(id, next) {
        User.findById(id)
        .then(function(user) {
            next(null, user);
        })
        .catch(function(err) {
            mext(Error(err.message));
        }); 
    });
    

    const localLogin = new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, username, password, next){
        User.findOne({username: username})
        .then(function(user){
            if (user == null) {
                return next(Error('User not found!'));
            } else {                
                if (user.password != req.body.password) {
                    return next(new Error('Wrong password'));
                } else {
                    return next(null, user);
                }                
            }
        })
        .catch(function(err){            
            res.json({error: err.message});
        });
    });

    passport.use('localLogin',localLogin);
}