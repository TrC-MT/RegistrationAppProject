const passport = require('passport');
const db = require('../db');

//controller that returns 'courses' payload from querying classes db table
exports.returnCourses = async (req, res) => {
    const courses = await db.getCourses();
    res.status(200).json(courses);
}

exports.returnUserEnrollment = async (req, res) => {
    const userEnrollment = await db.getUserEnrollment(req.params.userId);
    res.status(200).json(userEnrollment);
}

exports.enrollNewCourse = async (req, res) => {
    const enrolledCourse = await db.enrollCourseCurrentUser(req.body.userId, req.body.courseId);
    res.status(200).json({ successful: `Successfully enrolled a course for user: ${req.body.userId}`})
}