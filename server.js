const express = require('express');

// create express app
const app = express()

// parse requests of content-type - application/x-wwww-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to EasyNote application" })
})

//  listen for requests 
app.listen(3000, () => {
    console.log("server is listening on port 3000");
})