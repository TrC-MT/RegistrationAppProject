const express = require('express');
const router = express.Router();
const passport = require('passport');
const courseController = require('../controllers/course.controller.js')

//gets all courses from controller
router.get('/allCourses', courseController.returnCourses);

router.get('/enrolledCourses', courseController.returnUserEnrollment);

router.post('/enrollInCourse', courseController.enrollNewCourse);

module.exports = router;