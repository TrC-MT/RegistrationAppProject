const passport = require('passport')
const Pool = require('pg').Pool;

let dbURL = {
    connectionString: 
    process.env.DATABASE_URL ||
    'postgres://postgres:postgres@localhost:5432/postgres',
    ssl: true
};
const pool = new Pool(dbURL);
class AuthUser {
    async isAdminDB(userId) {
        query = 'SELECT is_admin FROM users'
        + ' WHERE id=$1';

        try {
            const isAdmin = await pool.query(query, [userId]);
            return isAdmin.rows;
        } catch(e) {
            console.log(e);
            return null;
        }
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
            //console.log(req.user.id)
            return res.json({ authenticated: true }) //, isAdmin: })
        }
        next()
    }
}

module.exports = new AuthUser();