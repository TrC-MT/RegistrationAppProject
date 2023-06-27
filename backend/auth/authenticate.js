const AuthUser = require('../services/AuthUser.js');
const passport = require('passport')

exports.isAuthenticatedAdmin = async (req, res, next) => {
    const isAdmin = await AuthUser.isAdminDB(req.user.id);

        if (req.isAuthenticated() && isAdmin) {
            return next();
        }
        res.json({ authenticated : false})
}

exports.isAuthenticatedUser = (req, res, next) => {

        if (req.isAuthenticated()) {
            return next();
        }
        res.json({ authenticated : false})
}