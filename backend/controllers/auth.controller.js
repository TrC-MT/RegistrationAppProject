const passport = require('passport');
const db = require('../db');
const AuthUser = require('../services/AuthUser.js');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;


//createUser first checks if the user already exists in the db
//if it isn't found then it creates a new user account using INSERT
exports.createUser = async (req, res) => {
    //variables
    const user = req.body.newUser; // user object sent from front-end
    //redefine password inside of front-end user obj. to hashed value
    user.password = await bcrypt.hash(user.password, 10); 
    //create user 
    const databaseUser = await db.getUser(user.userName);
    if (databaseUser === null) {
        //await on line below is optional because the lines below don't depend on anything returned from it
        db.insertNewUser(user);
        console.log(`User ${user} was added to the db!`);
        res.status(200).json({status: true, msg: 'User account has been created'});
    } else {
        res.status(200).json({status: false, msg: 'Username is unavailable.'})
    }
}


exports.authUser =
    //console.log('inside authenticate');
    passport.authenticate('local', {
        // successRedirect: '/loginSuccess',
        failureRedirect: '/loginFailed',
        failureFlash: true
    });

exports.login = (passport) => {
    console.log('Inside callback callback.', );
    passport.use('local',
    new localStrategy({usernameField: 'Credentials[username]', passwordField: 'Credentials[password]'},
    async (username, password, done) => {
    const user = await db.getUser(username);
    if (user === null) {
        return done(null, false, { message: 'User does not exist'});
    }
    try {
        //if we made it here then we know that the user exists 
    if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
    } else {
        //if we made it here the users password is incorrect
        console.log('Incorrect password');
        return done(null, false, { message: 'Incorrect password'});
    }
    } catch (err) {
        return done(err);
    }
}));
//symmetry-whatever you store when you serialize will be what is passed in when you deserialize
passport.serializeUser((user, cb) => cb(null, user.id)) //cb for 'callback' could also use 'done' or whatever else
passport.deserializeUser(async (id, cb) => cb(null, await db.getUserById(id)))
};
// SERVICE CALLS------------------------------------------------------------------
// controller calls isAuthenticated service
exports.currentlyAuthenticated = (req, res, next) => AuthUser.isAuthenticated(req, res, next);

exports.notAuthenticated = (req, res, next) => AuthUser.notAuthenticated(req, res, next);
    
    