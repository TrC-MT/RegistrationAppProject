const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;



module.exports = function (passport, getUserBy) {
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
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
};