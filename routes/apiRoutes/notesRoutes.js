const router = require("express").Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require("uuid");
const notes = require('../../db/db');
const { createNewNote, findById, deleteNote } = require('../../lib/notes');

// get notes saved in db.json
router.get('/notes', (req, res) => {
    res.json(notes);
});

// create new notes to be saved in db.json
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    createNewNote(req.body, notes);
    res.json(req.body);
});

// delete notes from db.json based on id
router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);

    deleteNote(note, notes);
    res.json();
});

module.exports = router;