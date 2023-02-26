const express = require('express');
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()
const db = require('./db')
const authRoute = require('./routes/auth.route.js');


//app.use(express.static('../client/build'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3001
// public facing 'web requests'

app.use('/', authRoute);
// app.use();

// protected web requests, must go through authentication process!
app.get('/courses',  (res, req) => {

});



app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})