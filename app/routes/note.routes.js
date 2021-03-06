module.exports = (app) => {
    const notes = require('../controllers/note.controller')

    // create a new note
    app.post('/notes', notes.create)

    // retrieve all note
    app.get('/notes', notes.findAll)

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne); 
    
    // update a note with noteId
    app.put('/notes/:noteId', notes.update)

    // delete a note with noteId
    app.delete('/notes/:noteId', notes.delete)
}