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
        const query = 'SELECT is_admin FROM users'
        + ' WHERE id=$1';

        try {
            const isAdmin = await pool.query(query, [userId]);
            return isAdmin.rows[0].is_admin;
        } catch(e) {
            console.log(e);
            return null;
        }
    }

    isValidPass() {

    }

    login() {
        
    }

    async isAuthenticatedAdmin(req, res, next) {
        const isAdmin = await this.isAdminDB(req.user.id);

        if (req.isAuthenticated() && isAdmin) {
            return next();
        }
        res.json({ authenticated : false, message: 'Warning unauthorized access, user is not an administrator'})
    }


    isAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.json({ authenticated : false, message: 'Warning unauthorized access must be logged in as user for access to this feature'})
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