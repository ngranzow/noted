const fs = require('fs');
const path = require('path');

const createNewNote = (note, notes) => {
    notes.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );

    return note;
};

const findById = (id, notes) => {
    const result = notes.filter(note => note.id === id)[0];
    return result;
};

const deleteNote = (note, notes) => {
    const index = notes.indexOf(note);
    notes.splice(index, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
};

module.exports = { createNewNote, findById, deleteNote };