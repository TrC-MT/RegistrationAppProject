const passport = require('passport')
const Pool = require('pg').Pool;

let dbURL = {
    connectionString: 
    // process.env.DATABASE_URL ||
    'postgres://postgres:postgres@localhost:5432/postgres',
    // ssl: true
};
const pool = new Pool(dbURL);


class AdminManagement {
    
    //function queries users db and returns list of students
    async getStudentsById() {
        const isAdmin = false;
        const query = 'SELECT id, first_name, last_name'
        + ' FROM users WHERE is_admin=$1';

        try {
            const listOfStudentUsers = await pool.query(query, [isAdmin]);
            return listOfStudentUsers;
        } catch(e) {
            console.log(e);
            return null;
        }
    }

    async returnCourses() {

    }

    login() {
        
    }

    isAuthenticated(req, res, next) {
        
    }

    notAuthenticated(req, res, next) {
        
    }
}

module.exports = new AdminManagement();