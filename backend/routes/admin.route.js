const express = require('express');
const router = express.Router();
const passport = require('passport');
const adminController = require('../controllers/admin.controller.js')


//gets all courses from controller
//router.get('/allCourses', adminController.returnCourses);


//HTTP reqeuests for admin's landing page-------------------------------
//router.post('/createNewStudentUser', adminController);

//router.post('createNewAdminUser', adminController);



//HTTP reqeuests for manageCourses page-------------------------------
//updates 'classes' db with new course, accessible by admins only!

router.post('/createNewCourse', adminController.createNewCourse);

router.put('/updateCourse', adminController.updateCourse);

router.delete('/deleteCourse', adminController.deleteCourse);



//HTTP reqeuests for manageStudentCourses page-------------------------
//gets a list of all students 
router.get('/getAllStudents', adminController.getStudentsById);

//router.post('/enroll', courseController.enrollNewCourse);

//router.delete('/drop', courseController.dropCourse);

module.exports = router;