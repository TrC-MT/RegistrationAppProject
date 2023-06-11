const passport = require('passport');
const AdminManagement = require('../services/AdminManagement.js');

//
exports.getStudentsById = async (req, res) => {
    const students = await AdminManagement.getStudentsById();

    if (students.rows.length) {
        res.status(200).json(students.rows);
    } else if (students.rows.length === 0) {
        res.status(200).json({ message: 'No students were found.'});
    } else if (students === null) {
        res.status(401).json({ message: 'Error: unable to retrieve student info.'});
    }  else {
        res.status(401).json({ message: 'An unknown error has ocurred.'});
    }
}