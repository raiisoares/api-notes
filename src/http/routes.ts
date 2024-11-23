import {createNote} from '@/http/controllers/create-note'
import {FastifyInstance} from 'fastify'
import {deleteNote} from '@/http/controllers/delete-note'

export function appRouter(app: FastifyInstance) {
    app.post('/notes', createNote)
    app.delete('/notes', deleteNote)
}

