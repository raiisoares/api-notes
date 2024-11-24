import {createNote} from '@/http/controllers/create-note'
import {FastifyInstance} from 'fastify'
import {deleteNote} from '@/http/controllers/delete-note'
import {findAllNotes} from '@/http/controllers/find-all-notes'
import {updateNoteStatus} from '@/http/controllers/update-note-status'

export function appRouter(app: FastifyInstance) {
    app.post('/notes', createNote)
    app.delete('/notes', deleteNote)
    app.get('/notes', findAllNotes)
    app.patch('/notes/status', updateNoteStatus)
}

