import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util-service.js'
import { gNotes } from './note-data.js'

export const keepService = {
    notesQuery,
};

function notesQuery() {
    let notes = storageService.query('notes')
    if (!notes || !notes.length) {
        notes = gNotes
        utilService.saveToStorage('notes', gNotes)
    }
    console.log('notes', notes)
    return Promise.resolve(notes)
}

// function createNote(){

// }