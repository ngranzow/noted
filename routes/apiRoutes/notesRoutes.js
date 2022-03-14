const router = require("express").Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require("uuid");
const notes = require('../../db/db');
const { createNewNote, findById, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    createNewNote(req.body, notes);
    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);

    deleteNote(note, notes);
    res.json();
});

module.exports = router;