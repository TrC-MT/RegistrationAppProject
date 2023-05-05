const passport = require('passport');
const db = require('../db');

//controller that returns 'courses' payload from querying classes db table
exports.returnCourses = async (req, res) => {
    const courses = await db.getCourses();
    const userEnrollment = await db.getUserEnrollment(req.user?.id);
    //console.log(`Current userEnrollment for ${req.user?.id}:`, userEnrollment);
    //by default set registered property to false for all courses
    courses.forEach(course => {
        course.registered = false;
    })
    userEnrollment.forEach(course => {
        let index = Number(course.course_id);
        //set registered property to true for courses that current user is enrolled for
        courses[index - 1].registered = true;
        
        //console.log(`${req.user.id} is enrolled in course ${course.title}!`);
    })
    // console.log('Testing output of courses', courses);

    res.status(200).json(courses);
}

exports.returnUserEnrollment = async (req, res) => {
    //originally passed req.query.userId into getUserEnrollment for testing purposes
    const userEnrollment = await db.getUserEnrollment(req.user?.id);
    res.status(200).json(userEnrollment);
}

exports.enrollNewCourse = async (req, res) => {
    //check if user already enrolled and if course exists!

    const enrollment = await db.enrollCourseCurrentUser(req.user?.id, req.body.courseId);
    //now get userEnrollment (from db) and add authenticated  
    //const userEnrollment = await db.getUserEnrollment(req.user?.id);
    if (enrollment) {
        res.status(200).json({ message: `Successfully enrolled in course `});
    } else {
        res.status(401).json({ message: `Error: unable to register for course ${req.body.courseId}`})
    }
}

exports.dropCourse = async (req, res) => {

}