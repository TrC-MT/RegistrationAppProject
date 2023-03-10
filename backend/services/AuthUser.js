const passport = require('passport')
class AuthUser {
    isValidUser() {

    }

    isValidPass() {

    }

    login() {
        
    }

    isAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.json({ authenticated : false})
    }

    notAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            console.log(req.user.id)
            return res.json({ authenticated: true }) //, isAdmin: })
        }
        next()
    }
}

module.exports = new AuthUser();