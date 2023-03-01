const express = require('express')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const app = express()
const db = require('./db')
const authRoute = require('./routes/auth.route.js')
const authenticate = require('./auth/authenticate.js')

// MIDDLEWARE----------------------------------------------
//app.use(express.static('../client/build'))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let users = [];

require('./auth/authenticate.js')(passport,
    
    )

const port = process.env.PORT || 3001
// public facing 'web requests'

app.get('/userProfile', (req, res) => {
    res.render('../client/src/')
})

//test routes-----------------------------------
app.get('/getUsers', db.getUsers);



//when using passport.authenticate() method you don't need the callback!
app.post('/studentLogin', passport.authenticate('local', {
    successRedirect: '/userProfile',
    failureRedirect: '/studentLogin',
    failureFlash: true
}));

app.post('/userRegistration', (req, res) => {
    const password = bcryptjs.hash(req.body.password, 10);
    users.push({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        username: req.body.user_name,
        password: password,
        email: req.body.email,
        address: req.body.address
    });
    res.redirect('/studentLogin');
})
//app.use('/', authRoute);
// app.use();

// protected web requests, must go through authentication process!
app.get('/courses',  (res, req) => {

});



app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})