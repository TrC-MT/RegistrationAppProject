const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');

//coordinate with frontend to route unlogged in users to login page
//if an authenticated user tries to access login page they will be redirected
//to /userProfile by frontend
router.get('/', authController.notAuthenticated, (req, res) => {
    res.status(200).json({ authenticated: false })
})
//authentication routes
router.post('/studentLogin', authController.notAuthenticated, authController.authUser, (req, res)=> {
    //if we're here then passport authentication was successful
    res.status(200).json({ successMessage: 'login successful' });
});
// router.get('/loginSuccess', (req, res)=>{
    
// })
router.get('/loginFailed', (req, res)=>{
    //console.log(req.flash('message'))
    console.log(req.user);
    res.status(401).json({ errorMessage: 'login failed' });
})

router.post('/userRegistration', authController.notAuthenticated, authController.createUser);

//logout route
router.delete('/logout', authController.currentlyAuthenticated, authController.logUserOut);

// router.get('/userRegistration', (req, res) => {
//     res.send('Inside auth.route.js file; request was successfully routed back to main app.js file!');
// });

module.exports = router;