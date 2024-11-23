import {createNote} from '@/http/controllers/create-note'
import {FastifyInstance} from 'fastify'

export function appRouter(app: FastifyInstance) {
    app.post('/notes', createNote)
}

