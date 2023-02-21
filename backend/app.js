const express = require('express');
const passport = require("passport")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const app = express()
const db = require('./db')

app.use(express.static('../client/build'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000







app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})