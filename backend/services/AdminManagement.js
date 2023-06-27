const passport = require('passport')
const Pool = require('pg').Pool;

let dbURL = {
    connectionString: 
    process.env.DATABASE_URL ||
    'postgres://postgres:postgres@localhost:5432/postgres',
    ssl: true
};
const pool = new Pool(dbURL);


class AdminManagement {
    
    //function queries users db and returns list of students
    async getStudentsDB() {
        const isAdmin = false;
        const query = 'SELECT id, first_name, last_name, user_name, email,'
        + ' phone_number, address FROM users WHERE is_admin=$1 ORDER BY last_name';

        try {
            const listOfStudentUsers = await pool.query(query, [isAdmin]);
            return listOfStudentUsers;
        } catch(e) {
            console.log(e);
            return null;
        }
    }

    async getAdminsDB() {
        const isAdmin = true;
        const query = 'SELECT id, first_name, last_name'
        + ' FROM users WHERE is_admin=$1 ORDER BY last_name';

        try {
            const listOfAdminUsers = await pool.query(query, [isAdmin]);
            return listOfAdminUsers;
        } catch(e) {
            console.log(e);
            return null;
        }
    }
    async getCurrentUserDB() {
        
    }

    async insertNewCourse(formObj) {

        const query = 'INSERT INTO classes (id, title, description,' 
        + ' schedule, classroom_number, maximum_capacity, credit_hours, tuition_cost)'
        + ' VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
        
        try {
            await pool.query(query, [formObj.id, formObj.title,
              formObj.description, formObj.schedule, formObj.classroomNumber,
              formObj.maximumCapacity, formObj.creditHours, formObj.tuition
            ]);
            return true; 
        } catch(e) {
            console.log(e);
            return null;
        }

    }

    async getNumberOfCourses() {
        let query = 'SELECT COUNT(course_id) FROM classes';
        try {
            return await pool.query(query, []);
        } catch(e) {
            console.log(e);
            return null;
        }        
    }

    async updateCourseDB(courseObj) {
        let query = 'UPDATE classes SET id=$1, title=$2, description=$3,' 
        + ' schedule=$4, classroom_number=$5, maximum_capacity=$6,'
        + ' credit_hours=$7, tuition_cost=$8 WHERE course_id=$9';

        try {
            const val = await pool.query(query, [courseObj.id, courseObj.title,
              courseObj.description, courseObj.schedule, courseObj.classroomNumber,
              courseObj.maximumCapacity, courseObj.creditHours, courseObj.tuition,
              courseObj.courseId]);
            console.log('inside updateCourseDB', val);
            return true;
        } catch(e) {
            console.log(e);
            return null;
        }
    }

    async deleteCourseDB(courseObj) {
        let query = 'DELETE FROM classes WHERE course_id=$1';

        try {
            const val = await pool.query(query, [ courseObj.courseId ]);
            console.log('inside deleteCourseDB', val);
            return true;
        } catch(e) {
            console.log(e);
            return null;
        }
    }
}

module.exports = new AdminManagement();