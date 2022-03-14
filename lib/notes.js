const fs = require('fs');
const path = require('path');

const createNewNote = (note, notes) => {
    // adds the new note to notes
    notes.push(note);

    // writes notes to db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );

    return note;
};

// finds note by id
const findById = (id, notes) => {
    const result = notes.filter(note => note.id === id)[0];
    return result;
};

const deleteNote = (note, notes) => {
    // removes note from notes
    const index = notes.indexOf(note);
    notes.splice(index, 1);

    // writes notes to db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
};

module.exports = { createNewNote, findById, deleteNote };