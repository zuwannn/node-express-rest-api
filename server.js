const express = require('express');
// configuring the database
const dbconfig = require('./config/database.config')
const mongoose = require('mongoose')

// create express app
const app = express()

mongoose.Promise = global.Promise

//  connecting to the database 
mongoose.connect(dbconfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})

// parse requests of content-type - application/x-wwww-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to EasyNote application" })
})

require('./app/routes/note.routes')(app)

//  listen for requests 
app.listen(3000, () => {
    console.log("server is listening on port 3000");
})