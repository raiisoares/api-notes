import {FastifyInstance} from 'fastify'
import {makeUpdateNoteUseCase} from '@/factories/update-note-use-case'
import {ZodTypeProvider} from 'fastify-type-provider-zod'
import {UpdateNoteRequestSchema} from '@/validations/uptdate-note-request-schema'
import {NoteResponseSchema} from '@/validations/note-response-schema'

export async function updateNote(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>()
      .patch('/notes', {
        schema: {
          summary: 'Update a note',
          tags: ['notes'],
          body: UpdateNoteRequestSchema,
          response: {
            200: NoteResponseSchema,
          }
        },
      }, async (request, reply) => {
        const updateNoteUseCase = makeUpdateNoteUseCase()
        const {id, data} = request.body

        try {
          const updatedNote = await updateNoteUseCase.execute({id, data})
          return reply.status(200).send(updatedNote)
        } catch (err) {
          throw err
        }
      })
}