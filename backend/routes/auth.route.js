const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');

//authentication routes
// router.post('/login', );
// router.get('/studentLogin', (req, res) => {
//     res.send('Inside get of /studentLogin')
// })
router.post('/studentLogin', authController.authUser, (req, res)=> {
    res.send('success');
});
// router.post('/studentLogin', (req, res) => {
//     console.log('inside /studentLogin path', req.body.username, req.body.password);
//     res.send('success');
// });
router.post('/userRegistration', authController.createUser);


// router.get('/userRegistration', (req, res) => {
//     res.send('Inside auth.route.js file; request was successfully routed back to main app.js file!');
// });

module.exports = router;