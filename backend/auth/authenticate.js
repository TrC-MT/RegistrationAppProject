const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;
const db = require('../db');



module.exports = function (passport) {
    const login = async (username, password, done) => {
        const user = getUserByUsername(username);
        if (user === null) {
            return done(null, false, { message: 'User does not exist'});
        }
        try {
            //if we made it here then we know that the user exists 
        if (await bcryptjs.compare(password, user.password)) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect password'});
        }
        } catch (e) {
            return done(e)
        }
        
    };

    passport.use(new localStrategy(login));
    //symmetry-whatever you store when you serialize will be what you get back when you deserialize
    passport.serializeUser((user, cb) => cb(null, user.id)) //cb for 'callback' could also use 'done' or whatever else
    passport.deserializeUser((id, cb) => cb(null, db.getUserById(id)))
};