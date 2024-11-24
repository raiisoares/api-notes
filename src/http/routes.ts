import {createNote} from '@/http/controllers/create-note'
import {FastifyInstance} from 'fastify'
import {deleteNote} from '@/http/controllers/delete-note'
import {findAllNotes} from '@/http/controllers/find-all-notes'

export function appRouter(app: FastifyInstance) {
    app.post('/notes', createNote)
    app.delete('/notes', deleteNote)
    app.get('/notes', findAllNotes)
}

