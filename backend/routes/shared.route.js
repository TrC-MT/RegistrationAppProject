const express = require('express');
const router = express.Router();
const passport = require('passport');
const courseController = require('../controllers/course.controller.js')

//shared route by both admin and student users
router.post('/allCourses', courseController.returnCourses);



module.exports = router;