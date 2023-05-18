const Pool = require('pg').Pool;

let dbURL = {
    connectionString: 
    process.env.DATABASE_URL ||
    'postgres://postgres:postgres@localhost:5432/postgres',
    ssl: true
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
    query = 'SELECT course_id, id, title, description, schedule, classroom_number, maximum_capacity,'
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
    query = 'INSERT INTO user_classes' 
    + ' (user_id, course_id) VALUES ($1, $2)';
    try {
        return await checkCourse(userId, courseId, query, userNeedsEnrolled, 'enroll');
    } catch(e) {
        console.log(e);
        return null;
    }
}


// api/courses/drop database logic -------------------------------------------

exports.dropCourseCurrentUser = async (userId, courseId) => {
    let query = 'DELETE FROM user_classes'
    + ' WHERE user_id=$1 AND course_id=$2';
    try {
        return await checkCourse(userId, courseId, query, userNeedsEnrolled, 'drop');
    } catch(e) {
        console.log(e);
        return null;
    }
    
}


//logic for both dropping courses and enrolling in courses
async function checkCourse(userId, courseId, dbQuery, cb, action) {
    const obj = { successfulQuery: null };
    const hasEnrolled = await cb(userId, courseId, action);
    const validCourse = await isValidCourse(courseId);

    if (hasEnrolled && validCourse) {
        try {
            //Delete course from db!
            await pool.query(dbQuery, [userId, courseId]);
            obj.successfulQuery = true;
            return obj;
        } catch(e) {
            console.log('Error encountered: ', e);
            obj.successfulQuery = false;
            return obj;
        }
    }
    //if we got here then either the user's already been enrolled or the course doesn't exist
    return false;
}

// checkcourse callback (drop) function--------------
const userNeedsEnrolled = async (userId, courseId, action) => {
    query = 'SELECT course_id FROM user_classes'
    + ' WHERE user_id=$1 AND course_id=$2'
    const alreadyEnrolled = await pool.query(query, [userId, courseId])

    //using a switch statement here alleviates the need to define two separate 
    //functions that perform a very similar task!
    switch(action) {
        case 'enroll':
            if (alreadyEnrolled.rows.length) {
                //if we are here the user has previously enrolled in the course!
                return false;
            }
                //if we made it here the user has NOT previously enrolled in the course
                return true;
            break;
        default:
            if (alreadyEnrolled.rows.length) {
                //if we are here the user has previously enrolled in the course!
                return true;
            }
                //if we made it here the user has NOT previously enrolled in the course
                return false;
    }
    
}

const isValidCourse = async (courseId) => {
    //check if course_id actually exists in classes db!!
    const query = 'SELECT * FROM classes'
    + ' WHERE course_id=$1';
    const isValidCourseId = await pool.query(query, [courseId]);

    if (isValidCourseId.rows.length) {
        return true;
    }
    //if we made it here the course does NOT currently exist in the database
    return false;
}
