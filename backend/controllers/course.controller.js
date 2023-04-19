const passport = require('passport');
const db = require('../db');

//controller that returns 'courses' payload from querying classes db table
exports.returnCourses = async (req, res) => {
    const courses = await db.getCourses();
    res.status(200).json(courses);
}

exports.returnUserEnrollment = async (req, res) => {
    const userEnrollment = await db.getUserEnrollment(req.query.userId);
    res.status(200).json(userEnrollment);
}

exports.enrollNewCourse = async (req, res) => {
    //check if user already enrolled and if course exists!
    const enrollment = await db.enrollCourseCurrentUser(req.body.userId, req.body.courseId);
    if (enrollment) {
        res.status(200).json({ message: `Successfully enrolled a course for user: ${req.body.userId}`})
    } else {
        res.status(401).json({ message: `Error: unable to register for course ${req.body.courseId}`})
    }
}