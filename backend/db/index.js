const Pool = require('pg').Pool;

let dbURL = {
    connectionString: 
    // process.env.DATABASE_URL ||
    'postgres://postgres:postgres@localhost:5432/postgres',
    // ssl: true
};
const pool = new Pool(dbURL);

exports.getUserById = async (id) => {

    const results = await
        pool.query('SELECT * FROM users WHERE id=$1', [id]);
    if (results.length !== 0) {
        return results.rows[0]
    }
    return null;
}
exports.insertNewUser = async (user) => {
    await pool.query('INSERT INTO users (user_name, password, email, first_name,'
        + ' last_name, phone_number, address) VALUES ($1, $2, $3,'
        + ' $4, $5, $6, $7)', [user.userName, user.password, user.email, user.firstName,
        user.lastName, user.phoneNumber, user.address]);
};


exports.getUser = async (username) => {
    const user = await 
        pool.query('SELECT * FROM users WHERE user_name=$1', [username]);
    if (user.rows.length !== 0) {
        return user.rows[0]
    }
    //if we made it here the user wasn't found
    return null;
};


exports.getCourses = async () => {
    query = 'SELECT id, title, description, schedule, classroom_number, maximum_capacity,'
    + ' credit_hours, tuition_cost FROM classes';
    const courses = await pool.query(query);
    // console.log(`Courses are: ${courses.rows}`);
    return courses.rows;
}

exports.getUserEnrollment = async (userId) => {
    query = 'SELECT * FROM classes WHERE course_id IN' 
    + ' (SELECT course_id FROM user_classes WHERE user_id=$1)';
    const enrolledCourses = await pool.query(query, [userId]);
    return enrolledCourses.rows;
}

exports.editUser = async (req, res) => {
    console.log('editUser is running.');
    const query = 'UPDATE user SET (user_name, password, email, first_name,'
    + ' last_name, phone_number, address) VALUES ($1, $2, $3,'
    + ' $4, $5, $6, $7)'
    const values = [user.userName, user.password, user.email, user.firstName,
        user.lastName, user.phoneNumber, user.address]
    await pool.query(query, values, (err, results) => {
        if(err){
            throw err;
        }
    })
}
// api/courses/enroll database logic-----------------------------------------------------
exports.enrollCourseCurrentUser = async (userId, courseId) => {
    const hasNotEnrolled = await isUserEnrolled(userId, courseId);
    const validCourse = await isValidCourse(courseId);

    if (hasNotEnrolled && validCourse) {
        query = 'INSERT INTO user_classes (user_id, course_id) VALUES ($1, $2)';
        const newEnrolledCourse = await pool.query(query, [userId, courseId]);
        return newEnrolledCourse;
    }
    //if we got here then either the user's already been enrolled or the course doesn't exist
    return false;
}

// enrollCourseCurrentUser helper functions---------
const isUserEnrolled = async (userId, courseId) => {
    query = 'SELECT course_id FROM user_classes'
    + ' WHERE user_id=$1 AND course_id=$2'
    const alreadyEnrolled = await pool.query(query, [userId, courseId])

    if (alreadyEnrolled.rows.length) {
        return false;
    }
    //if we made it here the user has NOT previously enrolled in the course
    return true;
}

const isValidCourse = async (courseId) => {
    //check if course_id actually exists in db
    const query = 'SELECT * FROM user_classes'
    + ' WHERE course_id=$1';
    const isValidCourseId = await pool.query(query, [courseId]);

    if (isValidCourseId) {
        return true;
    }
    //if we made it here the course does NOT currently exist in the database
    return false;
}



