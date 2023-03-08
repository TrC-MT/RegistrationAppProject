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
router.get('/loginSuccess', (req, res)=>{
    res.status(200).json( { successMessage: 'login successful!' });
})
router.get('/loginFailed', (req, res)=>{
    res.status(401).json({ errorMessage: 'login failed' });
})

router.post('/userRegistration', authController.createUser);


// router.get('/userRegistration', (req, res) => {
//     res.send('Inside auth.route.js file; request was successfully routed back to main app.js file!');
// });

module.exports = router;