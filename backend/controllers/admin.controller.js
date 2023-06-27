const passport = require("passport");
const AdminManagement = require("../services/AdminManagement.js");


function retrieveUserInfo(resObj, userRoll, users) {
    if (users.rows.length) {
        resObj.status(200).json(users.rows);
    } else if (users.rows.length === 0) {
        resObj.status(200).json({ message: "No students were found." });
    } else if (users === null) {
        resObj
          .status(400)
          .json({ message: `Error: unable to retrieve ${userRoll} info.` });
    } else {
        resObj.status(400).json({ message: "An unknown error has ocurred." });
      }
}
  
//controller functions for getting student/admin info for
//adminData and manageStudentCourses web pages
exports.getStudentsById = async (req, res) => {
    const students = await AdminManagement.getStudentsDB();

    retrieveUserInfo(res, req.query.roll, students);
};

exports.getAdminsById = async (req, res) => {
    const admins = await AdminManagement.getAdminsDB();

    retrieveUserInfo(res, req.query.roll, admins);
};


exports.getCurrentUser = async (req, res) => {
    const currentUser = await AdminManagement.getCurrentUserDB;

    
};



exports.createNewCourse = async (req, res) => {
  const wasCourseAdded = await AdminManagement.insertNewCourse(
    req.body.formObj
  );

  if (wasCourseAdded) {
    res
      .status(200)
      .json({
        message: `New course '${req.body.formObj.title}' was successfully created!`,
        success: true,
      });
  } else {
    res
      .status(400)
      .json({ message: "Error: unable to create new course!", success: false });
  }
};

exports.updateCourse = async (req, res) => {
    const updateSuccessful = await AdminManagement.updateCourseDB(req.body);
    if (updateSuccessful) {
        res
          .status(200)
          .json({
            message: `Course '${req.body.title}' has been successfully updated!`,
            success: true,
          });
    } else {
        res
          .status(400)
          .json({
            message: `Error: unable to update course ${req.body.title}`, 
            success: false 
          });
    }
};


exports.deleteCourse = async (req, res) => {
    const deletionSuccessful = await AdminManagement.deleteCourseDB(req.body);
    if (deletionSuccessful) {
        res
          .status(200)
          .json({
            message: `Course '${req.body.title}' has been successfully deleted!`,
            success: true,
          });
    } else {
        res
          .status(400)
          .json({
            message: `Error: unable to delete course ${req.body.title}`, 
            success: false 
          });
    }

};