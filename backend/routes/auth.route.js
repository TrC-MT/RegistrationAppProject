const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');

//coordinate with frontend to route unlogged in users to login page
//if an authenticated user tries to access login page they will be redirected
//to /userProfile by frontend
// router.get('/', authController.notAuthenticated, (req, res) => {
//     res.status(200).json({ authenticated: false })
// });

//authentication routes
router.post('/studentLogin', authController.notAuthenticated, authController.authUser, authController.userLogin);


//called by frontend for private routing by the GUI
router.get('/authenticate', (req, res) => {

    if (req.isAuthenticated()) {
        res.status(200).json({ authenticated: true })
    } else {
        res.status(200).json({ authenticated: false })
    }});

router.get('/loginFailed', (req, res)=>{
    //console.log(req.flash('message'))
    console.log(req.user);
    res.status(401).json({ errorMessage: 'login failed', redirect: 'false' });
});

router.post('/userRegistration', authController.notAuthenticated, authController.createUser);

//logout route
router.delete('/logout', authController.currentlyAuthenticated, authController.logUserOut);


module.exports = router;