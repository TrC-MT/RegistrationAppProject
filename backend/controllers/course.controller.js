const passport = require('passport');
const db = require('../db');

exports.returnCourses = async (req, res) => {
    const courses = await db.getCourses();
    console.log(`Here's what db.getCourses() returned inside of course.controller.js: ${courses}`);
    res.send('Courses sent!');
}

exports.returnUserEnrollment = () => {

}