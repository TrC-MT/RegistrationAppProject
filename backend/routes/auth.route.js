const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');

//authentication routes
router.post('/login', authController.login);
router.post('/studentLogin', authController.authUser);
router.post('/userRegistration', authController.createUser);


router.get('/userRegistration', (req, res) => {
    res.send('Inside auth.route.js file; request was successfully routed back to main app.js file!');
});

module.exports = router;