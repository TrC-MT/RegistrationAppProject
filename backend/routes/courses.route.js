const express = require('express');
const router = express.Router();
const passport = require('passport');
const courseController = require('../controllers/course.controller.js')


router.get('/enrolledCourses', courseController.returnUserEnrollment);

router.post('/enroll', courseController.enrollNewCourse);

router.delete('/drop', courseController.dropCourse);

module.exports = router;