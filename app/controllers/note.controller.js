const Note = require('../models/note.model')

// create and save a new Note
exports.create = (req, res) => {

    // validate request
    if(!req.body.content){
        return res.status(400).send({
            message: "Note content can not be empty"
        })
    }

    // create a note
    const note = new Note({
        title: req.body.title || "Untitled Note",
        content: req.body.content
    })

    // save Note in the database
    note.save()
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        })
    })
}

// retrieve and return all notes from the database
exports.findAll = (req, res) => {
    
}

// find a single note with a noteId
exports.findOne = (req, res) => {

}

// update a note identified by the noteId in the request
exports.update = (req, res) => {

}

// delete a note with the specified noteId in the request
exports.delete = (req, res) => {

}