const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller.js')

//gets all courses from controller
router.get('/allCourses', courseController.returnCourses);

//
router.get('/enrolledCourses', (req, res) => {

})

router.post('/addCourse', (req, res) => {

})

module.exports = router;