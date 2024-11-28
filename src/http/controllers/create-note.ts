import {FastifyInstance} from 'fastify'
import {makeCreateNoteUseCase} from '@/factories/make-create-note-use-case'
import {ZodTypeProvider} from 'fastify-type-provider-zod'
import {NoteRequestSchema} from '@/validations/note-request-schema'
import {NoteResponseSchema} from '@/validations/note-response-schema'

export async function createNote(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>()
      .post('/notes', {
        schema: {
          summary: 'Create a note',
          tags: ['notes'],
          body: NoteRequestSchema,
          response: {
            201: NoteResponseSchema
          },
        },
      }, async (request, reply) => {
        const createNoteUseCase = makeCreateNoteUseCase()
        const {title, subject, content} = request.body

        try {
          const note = await createNoteUseCase.execute({title, subject, content})
          return reply.status(201).send(note)
        } catch (err) {
          throw err
        }
      })
}