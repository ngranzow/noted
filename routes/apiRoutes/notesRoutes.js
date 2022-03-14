const router = require("express").Router();
const { notes } = require('../../db/db');
const { createNewNote, findById, editNote, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    if (!req.body.id) {
        req.body.id = notes.length.toString();
        let note = createNewNote(req.body, notes);
        res.json(note);
    } else {
        req.body.id = notes.length.toString();
        let note = editNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);

    deleteNote(note, notes);
    res.json(notes);
});

module.exports = router;