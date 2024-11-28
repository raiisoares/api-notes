import {FastifyInstance} from 'fastify'
import {makeUpdateNoteStatusUseCase} from '@/factories/update-note-status-use-case'
import {z} from 'zod'
import {ZodTypeProvider} from 'fastify-type-provider-zod'
import {NoteResponseSchema} from '@/validations/note-response-schema'

export async function updateNoteStatus(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>()
      .patch('/notes/status', {
        schema: {
          summary: 'Update a note status',
          tags: ['notes'],
          body: z.object({
            id: z.string().uuid()
          }),
          response: {
            200: NoteResponseSchema,
          }
        },
      }, async (request, reply) => {
        const updateNoteStatusUseCase = makeUpdateNoteStatusUseCase()
        const {id} = request.body

        try {
          const notes = await updateNoteStatusUseCase.execute({id})
          return reply.status(200).send(notes)
        } catch (err) {
          throw err
        }
      })
}