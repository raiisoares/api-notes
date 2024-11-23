import {createNote} from '@/http/controllers/notes'
import {FastifyInstance} from 'fastify'

export function appRouter(app: FastifyInstance) {
    app.post('/notes', createNote)
}

