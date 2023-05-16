const passport = require("passport");
const AdminManagement = require("../services/AdminManagement.js");

//
exports.getStudentsById = async (req, res) => {
  const students = await AdminManagement.getStudentsById();

  if (students.rows.length) {
    res.status(200).json(students.rows);
  } else if (students.rows.length === 0) {
    res.status(200).json({ message: "No students were found." });
  } else if (students === null) {
    res
      .status(401)
      .json({ message: "Error: unable to retrieve student info." });
  } else {
    res.status(401).json({ message: "An unknown error has ocurred." });
  }
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
            message: `New course '${req.body.title}' was successfully Edited!`,
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