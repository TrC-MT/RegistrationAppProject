// const { isAuthenticated } = require("./services/AuthUser");

function authenticate(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(404).json({ pageNotFound: true });
}

module.exports = authenticate;