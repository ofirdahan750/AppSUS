import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util-service.js'
import { gNotes } from './note-data.js'

export const keepService = {
    query
}
const KEY_NOTE = 'notes'

_createNote()

function _createNote() {
    let notes = utilService.loadFromStorage(KEY_NOTE)
    if (!notes || !notes.length) {
         notes =gNotes
        utilService.saveToStorage(KEY_NOTE, gNotes)
    }
}
function query() {
    return storageService.query(KEY_NOTE)
}
