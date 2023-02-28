const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');



router.get('/userRegistration', (req, res) => {
    res.send('Inside auth.route.js file; request was successfully routed back to main app.js file!');
});

module.exports = router;