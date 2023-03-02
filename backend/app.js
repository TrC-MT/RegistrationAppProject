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

//let users = [];

const { login } = require('./controllers/auth.controller.js');
login(passport);

const port = process.env.PORT || 3001
// public facing 'web requests'

app.get('/userProfile', (req, res) => {
    res.render('../client/src/')
})

//test routes-----------------------------------
app.get('/getUsers', db.getUsers);


//express.Router() routes------------------------
app.use('/', authRoute);



// protected web requests, must go through authentication process!
app.get('/courses',  (res, req) => {

});

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})