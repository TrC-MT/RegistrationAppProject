const express = require('express')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const flash = require('express-flash')
const session = require('express-session')
const cors = require('cors')
const app = express()
const db = require('./db')
const authRoute = require('./routes/auth.route.js')
const courseRoute = require('./routes/courses.route.js')
// const authenticate = require('./auth/authenticate.js')
const reactClientURL = 'http://localhost:3000'

// MIDDLEWARE----------------------------------------------
//app.use(express.static('../client/build'))
// app.use(
//     cors({
//         origin: reactClientURL, // <-- location of the react app we're connecting to
//         credentials: true,
//     })
// )
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {httpOnly: true}
}));


app.use(passport.initialize())
app.use(passport.session())
// app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { login } = require('./controllers/auth.controller.js')
login(passport)

const port = process.env.PORT || 3001

// public facing routes--------------------------------------
// note: all auth routes use '/' root path
app.use('/', authRoute);


// protected routes------------------------------------------
app.use('/course', courseRoute);


app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})