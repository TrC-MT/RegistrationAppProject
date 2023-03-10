const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');

//authentication routes
// router.post('/login', );
// router.get('/studentLogin', (req, res) => {
//     res.send('Inside get of /studentLogin')
// })
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

router.post('/userRegistration', authController.createUser);


// router.get('/userRegistration', (req, res) => {
//     res.send('Inside auth.route.js file; request was successfully routed back to main app.js file!');
// });

module.exports = router;